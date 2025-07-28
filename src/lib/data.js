import api from "./axios";

export async function fetchData(path) {
  try {
    const response = await api.get(path);
    return response.data;

  } catch (error) {
    console.error('Error al obtener los datos de la API', error.message);
  }
}