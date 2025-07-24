import { fetchData } from "@/lib/data";
import People from "@/features/info/components/People/People";

//Funcion para realizar la consulta, esto se hace en el servidor
async function fetchDetails(url) {
  try {
    const response = await fetchData(url);
    return response;
  } catch (error) {
    console.log(error);
  }
}

const filterResults = (obj) => {
  //Filtro para que no devolver apariciones de actor en programas de Entrevista y Reallitys
  const onlyCastNoEpisodes = obj
  .filter((item) => !item.genre_ids
  .some((element) => element === 10767 || element === 10763 || element === 10764))
  
  //Separo por movies y series
  const listFilter = {
    movies: onlyCastNoEpisodes && onlyCastNoEpisodes.filter((item) => item.media_type === 'movie').sort((a, b) => b.popularity - a.popularity),
    tv_shows: onlyCastNoEpisodes && onlyCastNoEpisodes.filter((item) => item.media_type === 'tv').sort((a, b) => b.popularity - a.popularity)
  }

  return listFilter;
}

export default async function PersonInfo({params}) {
  const { personId } = await params;
  const data = await fetchDetails(`/person/${personId}?language=en-US`);
  const credits = await fetchDetails(`/person/${personId}/combined_credits?language=es-MX`);
  const creditsFilter = filterResults(credits.cast);

  return (
    <div className="container-modal">
      <People data={data} creditsFilter={creditsFilter} />
    </div>
  )
}
