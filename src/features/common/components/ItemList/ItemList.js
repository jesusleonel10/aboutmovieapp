"use client"
import formatDateYear from "@/functions/formatDateYear";
import Image from "next/image";
import Link from "next/link";
import './ItemList.scss';

export default function ItemList({id, title, poster, media, year, character, from}) {

    const typeItem = [
        { id: 0, type: 'movie',  valor: 'Película'},
        { id: 1, type: 'tv',  valor: 'Serie de TV'},                  
        { id: 2, type: 'person',  valor: ''}          
    ]

  return (
  <>
  {
    poster && 
    <Link href={`/${media}/${id}`}>
      <li className="item-list">
          <div className="item-list__poster">
            <Image 
              src={`https://image.tmdb.org/t/p/w500/${poster}`}
              alt="Poster de la pelicula o serie de tv"
              width={48}
              height={72}
              priority={true}
            />
          </div>
          <div className="item-list__title">
              <p>{title}</p>
              {character && <p className="character">Personaje: <span>{character}</span></p>}
          </div>
          {from === 'results' ? 
              typeItem.filter((item) => item.type === media)
              .map((element, index) => {
                  return <span className="item-list__media" key={index} >{element.valor}</span> 
              })
              : null
              }
          {year && <span className="item-list__year">{formatDateYear(year)}</span>}
      </li>
    </Link>
  }
  </>
  )
}
