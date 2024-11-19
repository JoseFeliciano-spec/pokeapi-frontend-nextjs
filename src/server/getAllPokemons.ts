import axios from "axios";

export async function getAllPokemons(pageNo: any) {
  const pageConvert = parseInt(pageNo) === 1 ? 0 : parseInt(pageNo) * 20;
  const responseString = `${process.env.NEXT_PUBLIC_API_URL}/pokemon?offset=${pageConvert}&limit=20`;
  console.log(responseString);

  const response = await axios.get(responseString);

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
