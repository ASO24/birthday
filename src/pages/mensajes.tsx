import { useEffect, useState } from "react";
import type { Asistente } from "../schemas/asistentes";
import { obtenerAsistentes } from "../services/asistentes-selct";
import Menssaje from "../components/mensaje";

const Mensajes = () => {
  const [asistentes, setAsistentes] = useState<Asistente[]>([]);

  useEffect(() => {
    const cargar = async () => {
      const datos = await obtenerAsistentes();
      if (datos) setAsistentes(datos);
    };

    cargar();
  }, []);

  // 🔢 Cálculos de conteo
  const total = asistentes.length;
  const confirmados = asistentes.filter((a) => a.confirmado).length;
  const noConfirmados = total - confirmados;

  return (
    <div className="flex flex-col justify-center p-5">
      <p className="text-[#bd6725] text-2xl font-bold self-center mb-4">
        Asistentes
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
        <p className="text-lg text-[#bd6725]">Total: {total}</p>
        <p className="text-green-600 text-lg">Confirmados: {confirmados}</p>
        <p className="text-red-600 text-lg">No asistira: {noConfirmados}</p>
      </div>

      <ul>
        {asistentes.map((a) => (
          <Menssaje
            key={a.id} // 👈 importante para rendimiento
            name={a.nombre}
            menssaje={a.mensaje}
            state={a.confirmado}
          />
        ))}
      </ul>
    </div>
  );
};

export default Mensajes;
