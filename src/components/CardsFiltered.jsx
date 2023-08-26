import React from "react";
import {
  CardSectionFlag,
  ListFiltered,
  CardSectionName,
  CardSection,
  CardSectionContinent,
  CardSectionContent,
  CardInputCheckBox,
} from "../stylesComponent/StyleCardsFiltered";
import {  useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

function CardsFiltered({selectedCountries, handleCheckChange}) {

  const countriesFounds = useSelector((state) => state.countries.countries);


  return (
    <>
      <ListFiltered>
        {countriesFounds ? (
          countriesFounds.map((country) => {
            const key = uuidv4();
            return (
              <React.Fragment key={key}>
                <CardSection>
                  <CardInputCheckBox type="checkbox"
                  value={country.id}
                  onChange={handleCheckChange}
                  id={country.id}
                  name="cardSelected"
                  checked={selectedCountries.includes(country.id)}
                  />
                  <CardSectionFlag src={country.flag} alt="flag of country" />
                  <CardSectionContent>
                    <CardSectionName>{country.name}</CardSectionName>
                    <CardSectionContinent>
                      {country.continent}
                    </CardSectionContinent>
                  </CardSectionContent>
                </CardSection>
              </React.Fragment>
            );
          })
        ) : (
          <p>someone nothing</p>
        )}
      </ListFiltered>
    </>
  );
}

export default CardsFiltered;
