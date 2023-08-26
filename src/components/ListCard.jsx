import Card from "./Card";

import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { ListCardContainer } from "../stylesComponent/StyleListCard.js";

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
      <div>
        <button
          onClick={() => {
            changePage(currentPage - 1);
          }}
        >
          increment
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => {
            changePage(currentPage + 1);
          }}
        >
          decrement
        </button>
      </div>
    </ListCardContainer>
  );
}

export default ListCard;
