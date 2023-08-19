import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DetailContainer,BackToHomePage,DivSpan } from "../stylesComponent/StyleDetail";
import { Link } from "react-router-dom";
import back from '../assets/back.svg'


function Detail() {

  const { id } = useParams();
  const [country, setCountry] = useState({});
  const getCountry = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/countries/${id}`
      );
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    const fetchCountry = async () => {
      const fetchedCountry = await getCountry();
      if (fetchedCountry) {
        setCountry(fetchedCountry);
      }
    };

    fetchCountry();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  if(!country.Activities){
    country.Activities = [];
  }
  if (!country) {
    return <div>Carregando...</div>;
  }
  country.Activities = [];
  return (
    <DetailContainer>
      <article>
      <div>
      <BackToHomePage className="to-home">
          <Link to={'/home'}>
            <img src={back} alt="come back"/>
          </Link>
      </BackToHomePage>
      </div>
        <section className="Section-flag">
          <img src={country.flag} alt={country.id} />
        </section>
        <section className="Section-name">
          <DivSpan>Official name: <span><b>{country.name}</b></span></DivSpan>
        </section>
        <section className="Section-continent">
          <DivSpan>This country is on the continents: <span><b>{country.continent}</b></span></DivSpan>
        </section> 
        
        <section className="Section-subregion">
          <DivSpan>Their subregion is: <span><b>{country.subregion}</b></span></DivSpan>
        </section>
        <section className="Section-capital">
          <DivSpan>Capital: <span><b>{country.capital}</b></span></DivSpan>
        </section>
        <section className="Section-area">
          <DivSpan>The area of this country is: <span><b>{country.area}</b></span></DivSpan>
        </section>
        <section className="Section-population">
          <DivSpan>The population is: <span><b>{country.population}</b></span></DivSpan>
        </section>


        <section className="Section-activities">
        {country.Activities.length > 0 && (
          <>
            <h2>Activities: </h2>
            {country.Activities.map((act, index) => {
              return <p key={index}>{act.dio}</p>;
            })}
          </>
        )}
        </section>
      </article>
    </DetailContainer>
  );
}

export default Detail;
