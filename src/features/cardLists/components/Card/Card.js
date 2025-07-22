"use client"
import formatDate from '@/functions/formatDate';
import Votes from '../Votes/Votes';
import Image from 'next/image';
import './Card.scss';

export default function Card({id, poster, title, votes, votes_count, release, overview }) {
  return (
    <>
      <div className='card-movie-tv' onClick={() => {handleClick(id, true)}}>
            <div className="card-movie-tv__poster">
              <Image 
                alt="Poster de la pelicula,serie de tv o fotografia de la persona" 
                src={`https://image.tmdb.org/t/p/w500/${poster}`}
                width={300}
                height={400}
                priority={true}
              />
            </div>
            <div className="card-movie-tv__details">
                <h1 className='card-movie-tv__title'>{title}</h1>
                <h2>{
                        `${formatDate(release)}`
                    }</h2>
                <div className="card-movie-tv__rating">
                    <Votes valor={votes} cantidad={votes_count}/>
                </div>
                <p className="card-movie-tv__overview">
                  {overview}
                </p>     
            </div>
        </div>
    </>
  )
}
