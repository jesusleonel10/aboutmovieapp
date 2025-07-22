import Main from "@/features/cardLists/components/Main/Main"

export default function MoviesList() {
  //Valores para el menu de la barra de categorias
  const menuMovies =  
  [
    { id: 1, nombre: 'En Cartelera', valor: 'now_playing'},
    { id: 2, nombre: 'Populares', valor: 'popular'},                  
    { id: 3, nombre: 'Mejores Valorados', valor: 'top_rated'},          
    { id: 4, nombre: 'Proximamente', valor: 'upcoming'}
  ]
  return (
    <Main 
      categoryMenu={menuMovies}
      media={'movie'}
    />
  )
}
