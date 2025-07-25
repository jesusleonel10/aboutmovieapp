"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import InfinitePosters from "@/features/search/components/InfinitePosters/InfinitePosters";
import Poster from "@/features/search/components/Poster/Poster";
import './Search.scss'

export default function Search({trending}) {

  const [randomValue, setRandomValue] = useState(0);
  const [shuffleValue, setshuffleValue] = useState([]);
  //Capturamos lo escrito en el input
  const [inputSearch, setInputSearch] = useState('');
  const router = useRouter();

  const propsAnimationPosters = {
    image_per_row: 7,
    rows: 5,
    duration: 25000
  }

  useEffect(() => {
    if(trending) {
        const image = trending.slice(0, 6).map((poster) => poster.poster_path);
        
        const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );
        const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        
        setshuffleValue(shuffle(image))
        setRandomValue(random(propsAnimationPosters.duration - 5000, propsAnimationPosters.duration + 5000))
    }
  }, [trending]);

  const handleSearch = (e) => {
    e.preventDefault()

    if (inputSearch.trim()) {
      router.push(`/search?query=${encodeURIComponent(inputSearch.trim())}`);
    }

    else {
      alert('Por favor, ingresa algo para buscar...');
    }
    
  }

  return (
    <>   
      <div className="search-container">
          <div className="search-container__overlay" />

          <div className="search-container__title">
              <h2>Millones de películas y series para descubrir</h2>
          </div>
          <div className="search-container__input">
              <form action="">
                  <label className='hidden-visually' htmlFor="search">Buscar</label>
                      <input 
                          id="search" 
                          type="text" 
                          placeholder="Escribe alguna película, serie o celebridad" 
                          required="required"
                          value={inputSearch}
                          onChange={(e) => setInputSearch(e.target.value)}
                      />
                      <input type="submit" value="Buscar" onClick={(e) => handleSearch(e)} />
              </form>
          </div>
          <div className='search-container__items-scrolling items-scrolling-infinite-list'>

              {propsAnimationPosters && [...new Array(propsAnimationPosters.rows)].map((_, i) => (
                  <InfinitePosters key={i} duration={randomValue} reverse={i % 2}>
                  {shuffleValue && shuffleValue.slice(0, propsAnimationPosters.image_per_row).map(tag => (
                      <Poster poster={tag} key={tag}/>
                  ))}
                  </InfinitePosters>
              ))}
          </div>
      </div>
    </>
  )
}
