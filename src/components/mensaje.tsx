import type { FC } from "react";

interface Props {
  name: string;
  menssaje: string;
  state: boolean;
}

const Menssaje: FC<Props> = ({ name, menssaje, state }) => {
  return (
    <div className="flex flex-col border-2 border-[#bd6725] rounded-2xl my-5 p-3">
      <p className="text-[#bd6725] font-bold text-md">{name}</p>
      <p className="text-[#bd6725]">{menssaje}</p>

      <p className={state ? "text-green-600 mt-2" : "text-red-600 mt-2"}>
        {state ? "Confirmado" : "No asistira"}
      </p>
    </div>
  );
};

export default Menssaje;
