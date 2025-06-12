import Image from 'next/image';
import '../InfinitePosters/InfinitePosters.scss';

export default function Poster({poster}) {
  return (
    <div className='item-scrolling-infinite-list'>
      <Image
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        width={160}
        height={240}
        quality={65}
        priority={true}
        alt='Poster de la pelicula en tendencia'
      />
    </div>
  )
}
