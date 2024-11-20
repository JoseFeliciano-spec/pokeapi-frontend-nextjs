import axios from "axios";

export async function getSearchPokemon() {
  const responseString = `${process.env.NEXT_PUBLIC_API_URL}/pokemon?limit=100000&offset=0`;

  const response = await axios.get(responseString);

  return response?.data;
}
