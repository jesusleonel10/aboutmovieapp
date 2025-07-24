"use client"
import { useState, useEffect, useRef } from 'react';
import formatDate from "@/functions/formatDate";
import Image from "next/image";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import ItemList from '@/features/common/components/ItemList/ItemList';
import './People.scss'

export default function People({data, creditsFilter}) {

  const [value, setValue] = useState(0);
    /* useRef para crear una referencia a cada contenedor de las listas, las guardo en otra variable aparte */
  const listRef1 = useRef(null);
  const listRef2 = useRef(null);

  const genders = [
    { id: 0,  valor: 'No Especifica'},
    { id: 1,  valor: 'Femenino'},                  
    { id: 2,  valor: 'Masculino'},          
    { id: 3,  valor: 'No Binario'}
  ]

  const handleChange = (event, newValue) => {
        setValue(newValue);
  };

  useEffect(() => {
    if (listRef1.current) {
      listRef1.current.scrollTop = 0;
    }
    if (listRef2.current) {
      listRef2.current.scrollTop = 0;
    }
  }, [value]);
    
  console.log(data)

  return (
    <div className="container-modal__content">
        <div className='poster'>
          <Image 
            src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
            alt="Foto de la persona"
            width={320}
            height={480}
            quality={75}
            priority={true}
          />
        </div>
        <div className="details">
            <div className="title">
                <h2>{data.name}</h2>
                <div className='release'><h4>Fecha de Nacimiento:</h4><p>{formatDate(data.birthday)}</p></div>
                {
                  data.deathday !== null &&
                  <div className='release'><h4>Fecha de Fallecimiento:</h4><p>{formatDate(data.deathday)}</p></div>
                }
            </div>
            <div className='overview'>
                <h3>Biografia:</h3><p>{data.biography}</p>
            </div>
            <div className='genres'>
                <h3>Genero:</h3> 
                    {
                      genders
                      .filter((gender) => gender.id === data.gender)
                      .map((item, index) => {
                          return <p className='genre' key={index}>{item.valor}</p>
                      })
                        
                    }
            </div>
            <div className="country">
                <h3>Lugar de Nacimiento:</h3>
                  <p>{data.place_of_birth}</p>
            </div>
        </div>
        <div className="filmography">
          <h2 className="filmography__title">Películas y Series</h2>
          <div className="filmography__list">
            <Box  sx={{ width: '100%' }} >
              <Box sx={{ borderBottom: 1, borderColor: 'divider'}} >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    >
                    <Tab value={0} label="Películas" />
                    <Tab value={1} label="Series de TV" />
                </Tabs>
              </Box>
              {
                value === 0 &&
                //El ul es el contenedor de cada lista por ende le asigno la ref diferente a cada uno
                  <ul ref={listRef1}>
                    {creditsFilter && creditsFilter.movies.map((item, index) => {
                        return <ItemList
                                    key={index} 
                                    id={item.id}
                                    poster={item.poster_path}
                                    title={item.name || item.title}
                                    media={item.media_type}
                                    year={item.release_date || item.first_air_date}
                                    character={item.character}
                                />
                                    
                        })}
                  </ul>
              }
              {
                value === 1 &&
                    <ul ref={listRef2}>
                      {creditsFilter && creditsFilter.tv_shows.map((item, index) => {
                          return <ItemList
                                      key={index} 
                                      id={item.id}
                                      poster={item.poster_path}
                                      title={item.name || item.title}
                                      media={item.media_type}
                                      year={item.release_date || item.first_air_date}
                                      character={item.character}
                                  />
                      })}
                    </ul>
              }
            </Box>
          </div>
        </div>
    </div>
  )
}
