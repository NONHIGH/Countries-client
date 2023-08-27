import Card from "./Card";

import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { ListCardContainer, ListCardPageContainer } from "../stylesComponent/StyleListCard.js";
import { Button } from "../stylesComponent/StyleHeader";


function ListCard({ currentPage, changePage }) {
  const countries = useSelector((state) => state.countries.countries);

  const continentFilter = useSelector((state)=> state.countries.filters.continent);

  const filteredCountries = continentFilter !== "all" 
    ?
      countries.filter((country)=> country.continent[0] === continentFilter)
    :
      countries;

  const startCountry = (currentPage - 1) * 10;
  const endCountry = startCountry + 10;
  const paginatedCountries = filteredCountries.slice(startCountry, endCountry);
  let totalPages = Math.ceil(filteredCountries.length / 10);
  if (filteredCountries.length < 10) {
    totalPages = 1;
  }

  return (
    <>
    <ListCardPageContainer>
        <Button
          onClick={() => {
            changePage(currentPage - 1);
          }}
        >
          previus
        </Button>
        <span>{currentPage} of {totalPages}</span>
        <Button
          onClick={() => {
            changePage(currentPage + 1);
          }}
        >
          next
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
