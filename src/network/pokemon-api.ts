import { Pokemon, PokemonPage } from "@/models/Pokemon";
import api from "./axiosInstance";

export async function getPokemon(name: string) {
  const delay = Math.random() * 2000;
  await new Promise((r) => setTimeout(r, delay));
  const { data } = await api.get<Pokemon>(`/pokemon/${name}`);
  return data;
}

export async function getPokemonPage(page: number) {
  const pageSize = 12;
  const { data } = await api.get<PokemonPage>(
    `/pokemon?limit=${pageSize}&offset=${pageSize * (page - 1)}`
  );
  return data;
}

export async function setNickname(pokemon: Pokemon, nickname: string) {
  return { ...pokemon, name: nickname };
}
