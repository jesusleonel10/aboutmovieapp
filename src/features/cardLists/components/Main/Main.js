"use client"
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import Paginations from "@/features/common/components/Pagination/Paginations";
import { fetchDataList } from "@/app/actions";
import CardAnimation from "@/features/common/components/CardAnimation/CardAnimation";
import '@/styles/lists.scss'

export default function Main({categoryMenu, media}) {
  const [page, setPage] = useState(1);
  //Definir el filtro de la busqueda entre popular, mejores valorados etc...
  const [category, setCategory] = useState('popular');

  const [list, setList] = useState('');

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  //Al montar el componente invocamos al server action
  useEffect(() => {
    const listData = async() => {
      try {
        setLoading(true);
        setList('');
        const data = await fetchDataList(`/${media}/${category}?language=es-MX&page=${page}`)
        if (data.error) {
          setError(data.error);
        } else {
          setList(data.list);
        }
      } catch (err) {
        setError('Ocurrio un error inesperado');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
   listData();
  }, [page, category]);

  return (
    <>
      <Filters 
        setPage={setPage}
        setCategory={setCategory}
        values={categoryMenu}
      />
      <Paginations
        page={page}
        setPage={setPage}
      />
      <div className='cards-container'>
        {loading && <CardAnimation />}
          
        {list && list.results.map((element) => {
              return <Card
                  id={element.id}
                  media={media}
                  key={element.id}
                  poster={element.profile_path || element.poster_path} 
                  title={element.name || element.title}
                  release={element.release_date || element.first_air_date}
                  runtime={element.runtime}
                  overview={element.overview}
                  votes={element.vote_average}
                  votes_count={element.vote_count}
                  known_for={element.known_for}
              />
          })
        }
      </div>
      <Paginations 
        page={page}
        setPage={setPage}
      />
    </>
  )
}