import { supabase } from '../supabase/supabaseClient';

export async function getReserva() {
  const { data, error } = await supabase
    .from("reservas") 
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    throw error;
  }

  return data;
}

export async function createReserva(reserva) {
  const { data, error } = await supabase
    .from("reservas")
    .insert([reserva])
    .select();

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteReserva(id) {
  const { error } = await supabase.from("reservas").delete().eq("id", id);

  if (error) {
    throw error;
  }
}
