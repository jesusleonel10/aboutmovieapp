"use client"
import formatDate from '@/functions/formatDate';
import Votes from '../Votes/Votes';
import Image from 'next/image';
import Link from 'next/link';
import { faAngleRight, faUser } from '@fortawesome/free-solid-svg-icons';
import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card({id, media, poster, title, votes, votes_count, release, overview, known_for}) {
  return (
    <>
      <Link href={`/${media}/${id}`}>
        <div className='card-movie-tv'>
                {
          poster ?
              <div className="card-movie-tv__poster">
                  <Image 
                    alt="Poster de la pelicula, serie de tv o fotografia de la persona" 
                    src={`https://image.tmdb.org/t/p/w500/${poster}`}
                    width={300}
                    height={400}
                    priority={true}
                  />
              </div>
                  :
              <div className='card-movie-tv__without-poster'>
                <FontAwesomeIcon icon={faUser} style={{ fontSize: '2rem', color: '#bbb' }} />
              </div>
                }
              <div className="card-movie-tv__details">
                  <h1 className='card-movie-tv__title'>{title}</h1>
                  {
                    media !== 'person' ?
                    <>
                      <h2>{
                              `${formatDate(release)}`
                          }</h2>
                      <div className="card-movie-tv__rating">
                          <Votes valor={votes} cantidad={votes_count}/>
                      </div>
                      <p className="card-movie-tv__overview">
                        {overview}
                      </p>     
                    </>
                    :
                    <>
                      <h2>Participó en:</h2>
                      <ul>
                        {known_for && known_for.map((product) => {
                          return <li key={product.id}><FontAwesomeIcon icon={faAngleRight} />{` ${product.name || product.title}`}</li>
                        })}
                      </ul>
                    </>
                  }
              </div>
        </div>
      </Link>
    </>
  )
}
