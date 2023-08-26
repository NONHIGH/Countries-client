import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  DetailContainer,
  BackToHomePage,
  DivSpan,
  ListOfActivities,
  HeaderActivities,
  ActivitiesProperties,
  
} from "../stylesComponent/StyleDetail";
import { Link } from "react-router-dom";
import back from "../assets/back.svg";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByIdFromApi } from "../redux/features/country/actions";
import { resetCountryById } from "../redux/features/country/countrySlice";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCountryByIdFromApi(id));
    return () => dispatch(resetCountryById());
  }, [id, dispatch]);

  const country = useSelector((state) => state.countries.detailCountry);
  console.log(country);
  if (!country) {
    return <div>Carregando...</div>;
  }
  return (
    <DetailContainer>
      <article>
        <div>
          <BackToHomePage className="to-home">
            <Link to={"/home"}>
              <img src={back} alt="come back" />
            </Link>
          </BackToHomePage>
        </div>
        <section className="Section-flag">
          <img src={country.flag} alt={country.id} />
        </section>
        <section className="Section-name">
          <DivSpan>
            Official name:{" "}
            <span>
              <b>{country.name}</b>
            </span>
          </DivSpan>
        </section>
        <section className="Section-continent">
          <DivSpan>
            This country is on the continents:{" "}
            <span>
              <b>{country.continent}</b>
            </span>
          </DivSpan>
        </section>

        <section className="Section-subregion">
          <DivSpan>
            Their subregion is:{" "}
            <span>
              <b>{country.subregion}</b>
            </span>
          </DivSpan>
        </section>
        <section className="Section-capital">
          <DivSpan>
            Capital:{" "}
            <span>
              <b>{country.capital}</b>
            </span>
          </DivSpan>
        </section>
        <section className="Section-area">
          <DivSpan>
            The area of this country is:{" "}
            <span>
              <b>{country.area}</b>
            </span>
          </DivSpan>
        </section>
        <section className="Section-population">
          <DivSpan>
            The population is:{" "}
            <span>
              <b>{country.population}</b>
            </span>
          </DivSpan>
        </section>
        <ListOfActivities>
          {country?.Activities?.length > 0 && (
            <>
              <HeaderActivities>
                <h1>List of Activities</h1>
              </HeaderActivities>
              {country?.Activities?.map((act, index) => {
                return (
                  <React.Fragment key={index}>
                      <ActivitiesProperties>
                      <div className="Activitie-name">{act?.name}</div>
                      <div className="Activitie-difficulty">{act?.difficulty}</div>
                      <div className="Activitie-duration">{act?.duration}</div>
                      <div className="Activitie-season">{act?.season}</div>
                      </ActivitiesProperties>
                  </React.Fragment>
                );
              })}
            </>
          )}
        </ListOfActivities>
      </article>
    </DetailContainer>
  );
}

export default Detail;
