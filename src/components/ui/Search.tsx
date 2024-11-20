"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Manejar searchParams
import Autocomplete from "@mui/joy/Autocomplete";
import { getSearchPokemon } from "@/server/getSearchPokemon";
import { toCapitalize } from "@/lib/toCapitalize";

export default function Search() {
  const [options, setOptions] = useState([]);
  const router = useRouter(); // Para manejar rutas

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await getSearchPokemon();
      const arr = response?.results?.map((item: any) => ({
        label: toCapitalize(item?.name),
        id: item?.name,
      }));
      setOptions(arr);
    };

    fetchPokemonList();
  }, []);

  const handleSelection = (event: any, value: any) => {
    console.log(handleSelection);
    if (value?.id) {
      router.push(`/pokemon?name=${value?.id}`);
    }
  };

  return (
    <>
      <Autocomplete
        placeholder="Buscar un Pokémon"
        options={options}
        onChange={handleSelection} // Detecta la selección y maneja la redirección
      />
    </>
  );
}
