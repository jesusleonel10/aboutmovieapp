import Main from "@/features/cardLists/components/Main/Main";

export default function TvShowsList() {
  //Valores para el menu de la barra de categorias
  const menuTvShow =  
  [
    { id: 1, nombre: 'Se emiten hoy', valor: 'airing_today'},
    { id: 2, nombre: 'En transmision', valor: 'on_the_air'},                  
    { id: 3, nombre: 'Populares', valor: 'popular'},          
    { id: 4, nombre: 'Mejor Valoradas', valor: 'top_rated'}
  ]

  return (
    <Main 
      categoryMenu={menuTvShow}
      media={'tv'}
    />
  )
}
