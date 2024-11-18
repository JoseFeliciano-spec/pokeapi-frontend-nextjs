import axios from "axios";

export async function getAllPokemons() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/pokemon?offset=0&limit=20`
  );

  const results = await Promise.all(
    response?.data?.results?.map(async (item: any) => {
      const pokemonData = await axios.get(item?.url);
      return {
        name: item?.name,
        ...pokemonData?.data,
      };
    })
  );

  return { ...response.data, results };
}
