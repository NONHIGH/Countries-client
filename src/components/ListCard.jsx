import Card from "./Card";

import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect } from "react";
import { BackgroundError, ListCardContainer, ListCardPageContainer, ListCardsButtonPage, PageCurrentTitle } from "../stylesComponent/StyleListCard.js";
import { Button } from "../stylesComponent/StyleHeader";
import carregando from '../assets/carregando.png'

function ListCard({ currentPage, changePage }) {
  const countries = useSelector((state) => state.countries.countries);

  const {continent, activity} = useSelector((state)=> state.countries.filters);

  let filteredCountries = [];

  if (continent !== "All") {
    filteredCountries = countries.filter(
      (country) => country.continent[0] === continent
    );
  } else {
    filteredCountries = countries
  }
  if (activity !== "All") {
    filteredCountries = filteredCountries.filter((country) =>
      country.Activities?.some((act) => act?.season === activity)
    );
  }
  

  const startCountry = (currentPage - 1) * 10;
  const endCountry = startCountry + 10;
  const paginatedCountries = filteredCountries.slice(startCountry, endCountry);
  let totalPages = Math.ceil(filteredCountries.length / 10);
  if (filteredCountries.length < 10) {
    totalPages = 1;
  }

  const buttons = Array.from({length:totalPages},(_, index)=>index+1)
  

  useEffect(()=>{
    if(totalPages < currentPage){
      changePage(totalPages)
    }
  },[totalPages, changePage,currentPage])
  if(filteredCountries.length < 1){
    return (<BackgroundError><h1>Nothing here</h1><img src={carregando} alt="carregando" /></BackgroundError>)
  }
  return (
    <>
      <PageCurrentTitle>{currentPage} of {totalPages}</PageCurrentTitle>
    <ListCardPageContainer>
        <Button
          onClick={() => {
            changePage(currentPage - 1);
          }}
          disabled={currentPage+1 <= 0}
        >
          ☚
        </Button>
        <ListCardsButtonPage>
        {buttons.map((page)=>(
            <button key={page} onClick={()=>changePage(page)}>{page}</button>
          ))}
        </ListCardsButtonPage>

        <Button
          onClick={() => {
              changePage(currentPage + 1);
          }}
          disabled={currentPage +1 > totalPages}
        >
          ☛
        </Button>
      </ListCardPageContainer>
    <ListCardContainer>
      {paginatedCountries.map((country) => {
        const key = uuidv4();
        return (
          <React.Fragment key={key}>
            <Card
              id={country.id}
              image={country.flag}
              title={country.name}
              ></Card>
          </React.Fragment>
        );
      })}
      
    </ListCardContainer>
      </>
  );
}

export default ListCard;
