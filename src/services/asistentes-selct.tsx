import type { Asistente } from "../schemas/asistentes"
import { supabase } from "../supabase"

export const obtenerAsistentes = async (): Promise<Asistente[] | null> => {
  const { data, error } = await supabase
    .from('asistentes')
    .select('id, nombre, confirmado, mensaje') // columnas exactas

  if (error) {
    console.error('Error al obtener asistentes:', error.message)
    return null
  }

  return data as Asistente[]
}
