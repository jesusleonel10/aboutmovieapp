import Link from "next/link";
import styled from "styled-components";

export default function ItemSlider({id, mediatype, title, overview, poster, backdrop}) {

  return (
    <>
      <Item
          url={`https://image.tmdb.org/t/p/w1280${backdrop}`}
          className='slider-container__item'
          style={
              {backgroundImage: `url('https://image.tmdb.org/t/p/w500${poster}')`}
          }
      >
          <div className='slider-container__content'>
              <h2>{title}</h2>
              <p>{overview}</p>
              <Link href={`/${mediatype}/${id}`} className="see-more">Ver mas</Link>
          </div>
      </Item>
    </>
  )
}

const Item = styled.li`
    &:nth-child(1), &:nth-child(2) {
        background-image: linear-gradient(to bottom right, rgb(2, 131, 145, 0.6), rgb(1, 32, 78, 0.8)), url(${props => props.url}) !important;
    }
`
