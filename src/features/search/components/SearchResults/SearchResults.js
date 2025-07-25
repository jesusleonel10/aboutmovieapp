"use client"
import {useState, useEffect} from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import Paginations from '@/features/common/components/Pagination/Paginations';
import ItemList from '@/features/common/components/ItemList/ItemList';
import Spinner from '@/features/common/components/Spinner/Spinner';
import { fetchDataList } from '@/app/actions';
import './SearchResults.scss';

export default function SearchResults({query, data}) {
  //Flag para saber si el input esta vacio o no
  const [empty, setEmpty] = useState(false);
  const [newQuery, setNewQuery] = useState(query);
  //Estado del input al iniciar sera el del input anterior
  const [inputSearch, setInputSearch] = useState(query);
  //Estado para guardar la nueva consulta
  const [listQuery, setListQuery] = useState(data);
  const [loading, setLoading] = useState(true);
  //Paginacion
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const listData = async() => {
      if (newQuery !== '') {
          try {
            setLoading(true);
            setListQuery('');
            const data = await fetchDataList(`/search/multi?query=${newQuery}&include_adult=false&language=es-MX&page=${page}`);
            if (data.error) {
              console.log(data.error);
            } else {
              setListQuery(data.list);
              setTotalPages(data.list.total_pages);
            }
          } catch (error) {
            console.log('Ocurrio un error inesperado', error);
          } finally {
            setLoading(false);
        }
      }
      else {
        setEmpty(true);
        setTotalPages(1);
        setListQuery('');
      }
      }
    listData();
  }, [page, newQuery])

  const handleSearch = async (e) => {
      e.preventDefault();
      setNewQuery(inputSearch); //Actualizamos el state al hacer el submit
      //Capturamos y establecemos el nuevo parametro de busqueda
      const newSearchParamas = new URLSearchParams(searchParams.toString());
      newSearchParamas.set('query', inputSearch);
      //Redireccionamos a la nueva ruta
      router.push(`?${newSearchParamas.toString()}`);
      setEmpty(false);
  }
  
  return (
          <div className="container-modal__search">
              <div className="input">
                  <form action="" >
                      <label className='hidden-visually' htmlFor="search">Buscar</label>
                      <input 
                          id="search" 
                          type="text" 
                          placeholder="Ingresa el nombre de alguna película, serie de TV o celebridad" 
                          required="required"
                          // value={inputSearch}
                          defaultValue={inputSearch}
                          //Capturamos cada cambio en el input y lo actualizamos al estado global
                          onChange={(e) => setInputSearch(e.target.value)}
                      />
                      <input type="submit" value='Buscar' onClick={handleSearch} />
                  </form>
              </div>
              <Paginations 
                page={page}
                setPage={setPage}
                totalpages={totalPages}
              />
              {empty ?
                  <div className="empty">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                      <h3>Escribe algo para buscar...</h3>
                  </div>

                  : loading ?
                  <div className='loading'>
                    <Spinner />
                  </div>
                  :
                  <>
                  <div className='list'>
                    <ul>
                      {
                        listQuery && listQuery.results.map((item, index) => {
                          return <ItemList
                                    key={index} 
                                    from={'results'}
                                    id={item.id}
                                    poster={item.poster_path || item.profile_path}
                                    title={item.name || item.title}
                                    media={item.media_type}
                                    year={item.release_date || item.first_air_date}
                                />
                        })
                      }
                    </ul>
                  </div>
                  </>
                  }
              <Paginations 
                  page={page}
                  setPage={setPage}
                  totalpages={totalPages}
              />
          </div>
  )
}
