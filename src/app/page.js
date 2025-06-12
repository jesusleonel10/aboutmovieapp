import { fetchData } from "@/lib/data";
import Search from "@/features/search/components/Search/Search";
import Slider from "@/features/slider/components/Slider/Slider";


export default async function Home() {
  let trending = [];
  let error = null;

  try {
    trending = await fetchData(`/trending/all/day?&language=es-MX`);
  } catch (err) {
    error = err;
    console.error("Error al ejecutar la obtencion de datos", err);
  }

  if (error) {
    return (
      <div>
        <h1>Error al cargar los posters (con Axios)</h1>
        <p>{error.message}</p>
        <p>Por favor, intenta de nuevo más tarde.</p>
      </div>
    );
  }

  return (
    <>
      <Search 
        trending={trending.results}
      />
      <Slider 
        trending={trending.results}
      />
    </>
  );
}
