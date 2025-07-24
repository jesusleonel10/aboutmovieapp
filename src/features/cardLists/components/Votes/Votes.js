"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFaceAngry,
  faFaceFrown,
  faFaceMeh,
  faFaceSmile,
  faFaceLaughBeam,
  faFaceGrinStars,
} from "@fortawesome/free-solid-svg-icons";

export default function Votes(props) {

  const { valor, cantidad, coloremoji } = props;
  const porcentaje = valor * 100 / 10; // Convertir valor a porcentaje

  return (
  <>
   <div className="emoji_number">
      {
          porcentaje < 30 ? 
            <FontAwesomeIcon icon={faFaceAngry} style={{color: '#FFA98D'}} />
          :
          porcentaje < 50 ?
            <FontAwesomeIcon icon={faFaceFrown} style={{color: '#FFC385'}} />
          :
          porcentaje < 60 ?
            <FontAwesomeIcon icon={faFaceMeh} style={{color: '#FFD885'}} />
          :
          porcentaje < 70 ?
            <FontAwesomeIcon icon={faFaceSmile} style={{color: '#FFD885'}} />
          :
          porcentaje < 80 ?
            <FontAwesomeIcon icon={faFaceLaughBeam} style={{color: '#FFD885'}} />
          : 
          porcentaje < 100 ?
            <FontAwesomeIcon icon={faFaceGrinStars} style={{color: '#FFD885'}} />
          : null
      }

    <span>{`${Math.floor(porcentaje)}%`}</span>
    </div>
    <span>Votos: {cantidad}</span>
  </>
  )
}
