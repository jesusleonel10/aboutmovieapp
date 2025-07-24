import Main from "@/features/cardLists/components/Main/Main";
export default function PeopleList() {
  //Valores para el menu de la barra de categorias
  const menuPeople =  
  [
    { id: 1, nombre: 'Populares', valor: 'popular'}
  ]

  return (
    <>
      <Main
        categoryMenu={menuPeople}
        media={'person'}
      />
    </>
  )
}
