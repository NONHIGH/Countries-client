import { CardStyle, CardSectionSpan, CardSectionImage } from "../stylesComponent/StyleCard";
import { Link } from 'react-router-dom'

function Card({id, image, title }) {
  
  return (
    <>
        <CardStyle>
            <CardSectionImage>
              <img src={image} alt="imageCountry"/>
            </CardSectionImage>
            <CardSectionSpan>
              <span>
              {title}
              </span>
            </CardSectionSpan>
            <footer>
              <Link to={`/detail/${id}`}>more info</Link>
            </footer>
        </CardStyle>

        
    </>
  )
}

export default Card