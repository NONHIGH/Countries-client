import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuidv4 } from 'uuid';
import React, { useEffect } from "react";
import {ListCardContainer} from '../stylesComponent/StyleListCard.js'
import {getLimitedCountries} from '../redux/features/country/actions'
function ListCard() {
  const stateGlobal = useSelector((state) => state.countries.countries);
  const currentPage = useSelector((state)=> state.countries.currentPage);
  const totalPages = useSelector((state)=>state.countries.totalPages);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getLimitedCountries(currentPage));
  },[currentPage, dispatch]);

  const changePage = (page) => {
    if(page >= 1 && page <= totalPages){
      dispatch(getLimitedCountries(page));
    }
  }

  return (
    <ListCardContainer>
      {stateGlobal.map((country) => {
        const key= uuidv4();
        return (
          <React.Fragment key={key} >
            <Card id={country.id} image={country.flag} title={country.name}></Card>
          </React.Fragment>
        );
      })}
      <div>
        <button onClick={()=>{changePage(currentPage - 1)}}>increment</button>
        <span>{currentPage} of {totalPages}</span>
        <button onClick={()=>{changePage(currentPage + 1)}}>decrement</button>
      </div>
    </ListCardContainer>
  );
}

export default ListCard;
