import { fetchData } from '@/lib/data';
import MovieTVShow from '@/features/info/components/MovieTVShow/MovieTVShow';
import '@/styles/info.scss';

//Funcion para realizar la consulta, esto se hace en el servidor
async function fetchDetails(url) {
  try {
    const response = await fetchData(url);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default async function MovieInfo({params}) {
  const { tvId } = await params;
  const data = await fetchDetails(`/tv/${tvId}?language=es-MX`);
  const credits = await fetchDetails(`/tv/${tvId}/credits?language=es-MX`);
  const providers = await fetchDetails(`/tv/${tvId}/watch/providers`);

  return (
    <div className='container-modal'>
      <MovieTVShow data={data} dataCredits={credits} dataProviders={providers} media={'tv'} />
    </div>
  )
}