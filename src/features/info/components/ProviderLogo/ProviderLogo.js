import Image from "next/image"

export default function ProviderLogo({logo, classname}) {
  return (
    <>
        {
        logo ?
        <div className={`${classname} card_provider`}>
                <Image 
                  className="card_provider__logo" 
                  src={`https://image.tmdb.org/t/p/original${logo}`}
                  width={50}
                  height={50}
                  alt="Logo de la plataforma de streaming o de alquiler/compra"
                />
        </div>
        :
        <div className="no_providers">
            <i className="fa-solid fa-circle-exclamation"></i>
            <span>No Disponible en plataformas digitales aún</span>
        </div>
        }
    </>
  )
}
