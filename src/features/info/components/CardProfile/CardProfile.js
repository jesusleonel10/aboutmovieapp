import Image from 'next/image';
import Link from 'next/link';
import './CardProfile.scss';

export default function CardProfile({id, photo, name, character, job}) {

  return (
    <Link href={`/person/${id}`}>
      <div className="card_profile">
        <div className="card_profile__photo">
            {
                photo && 
                <Image 
                  src={`https://image.tmdb.org/t/p/w500${photo}`}
                  width={120}
                  height={120}
                  alt='Foto del actor que participa en la pelicula/serie'
                />
            }
        </div>
        <div className="card_profile__details">
            <h3>{name}</h3>
            <h4>{character || job}</h4>
        </div>
      </div>
    </Link>
  )
}
