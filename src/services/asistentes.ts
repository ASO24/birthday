import type { Asistente } from "../schemas/asistentes"
import { supabase } from "../supabase"

const insertarAsistente = async (nuevo: Asistente) => {
  const { data, error } = await supabase
    .from('asistentes')
    .insert([nuevo])

  if (error) {
    console.error("❌ Error de Supabase:", error)
    return { success: false, error: error.message }
  }

  console.log("✅ Insertado correctamente:", data)
  return { success: true, data }
}
 export default insertarAsistente