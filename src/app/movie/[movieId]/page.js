import { fetchData } from '@/lib/data';
import MovieTVShow from '@/features/info/components/MovieTVShow/MovieTVShow';
import '@/styles/info.scss'

async function fetchDetails(url) {
  try {
    const response = await fetchData(url);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export default async function MovieInfo({params}) {
  const { movieId } = await params;
  const data = await fetchDetails(`/movie/${movieId}?language=es-MX`);
  const credits = await fetchDetails(`/movie/${movieId}/credits?language=es-MX`);
  const providers = await fetchDetails(`/movie/${movieId}/watch/providers`);
  return (

    <div className='container-modal'>
      <MovieTVShow data={data} dataCredits={credits} dataProviders={providers} media={'movie'} />
    </div>
  )
}
