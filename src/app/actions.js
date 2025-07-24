"use server"
import { fetchData } from "@/lib/data";
//Server action para hacer la consulta a la api de TMDB
export async function fetchDataList(url) {
  //Compruebo que no este vacio el url
  if (!url) {
    return { error: "URL no valida o vacia" };
  }
  //Hago la consulta, llamando a la funcion previamente hecha
  try {
    const response = await fetchData(url);
    return { list: response, url: url };
  } catch (error) {
    console.log(error);
    return { error: "Ocurrio un error al consultar la lista" };
  }
}