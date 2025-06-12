"use client"

import { useState, useEffect } from "react";
import Modal from "@/features/common/components/Modal/Modal";
import InfinitePosters from "@/features/search/components/InfinitePosters/InfinitePosters";
import Poster from "@/features/search/components/Poster/Poster";
import './Search.scss'

export default function Search({trending}) {

  const [modal, setModal] = useState(false);

  const [randomValue, setRandomValue] = useState(0);
  const [shuffleValue, setshuffleValue] = useState([]);
  //Definir el value de lo que se escribe en el input text para hacer la busqueda
  const [inputSearch, setInputSearch] = useState('');

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

const handleChange = (setState) => (event) => {
  setState(event.target.value)
}

const handleClick = (e) => {
  e.preventDefault()
  inputSearch && setModal(true);
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
                          onChange={handleChange(setInputSearch)}
                      />
                      <input type="submit" value="Buscar" onClick={(e) => handleClick(e)} />
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
          
      {//Al cambiar el type cambio el componente dentro de modal
      modal &&
      <Modal header='Buscar Película o Serie de TV' modal={modal} setModal={setModal}>
          {/* <ResultsList 
              inputSearch={inputSearch}
              setInputSearch={setInputSearch}
          /> */}
      </Modal>
      }
    </>
  )
}
