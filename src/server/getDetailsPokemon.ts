import axios from "axios";

export async function getDetailsPokemon(name: any) {
  const responseString = `${process.env.NEXT_PUBLIC_API_URL}/pokemon/${name}`;

  const response = await axios.get(responseString);

  return response?.data;
}
