import { useDispatch } from "react-redux";
import {
  FilterOrder,
  FiltersContainer,
  OrderContainer,
  FilterOrderLabel,
  FilterOrderSection,
  FilterOrderSelect
} from "../stylesComponent/StyleFilters";
import { setFilter, orderCountriesBy } from "../redux/features/country/countrySlice";

export default function SectionFilters() {


  const dispatch = useDispatch();

  const handleFilter = (event)=>{
    const {value, name} = event.target;
    const payload = {value, name};
    dispatch(setFilter(payload));
  }

  const handleOrderChange = (event) => {
    const {name, value} = event.target;
    dispatch(orderCountriesBy({by:name, order:value}));
  }

  return (
    <FilterOrder>
      <FiltersContainer>
        <h4>Filters</h4>
        <FilterOrderSection>
          <FilterOrderLabel htmlFor="continent">Continent</FilterOrderLabel>
          <FilterOrderSelect name="continent" id="continent" onChange={handleFilter}>
            <option defaultValue="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="South America">South America</option>
            <option value="North America">North America</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctica">Antarctica</option>
          </FilterOrderSelect>
        </FilterOrderSection>
        <FilterOrderSection>
          <FilterOrderLabel htmlFor="activity">Activity</FilterOrderLabel>
          <FilterOrderSelect name="activity" id="activity" onChange={handleFilter}>
            <option defaultValue="All">All</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autunm</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
          </FilterOrderSelect>
        </FilterOrderSection>
      </FiltersContainer>
      <OrderContainer>
        <h4>Orders</h4>
        <FilterOrderSection>
          <FilterOrderLabel htmlFor="population">Population</FilterOrderLabel>
          <FilterOrderSelect name="population" id="population" onChange={handleOrderChange}>
            <option value="asc">Ascending</option>
            <option value="des">Descending</option>
          </FilterOrderSelect>
        </FilterOrderSection>
        <FilterOrderSection>
          <FilterOrderLabel htmlFor="name">name</FilterOrderLabel>
          <FilterOrderSelect name="name" id="name" onChange={handleOrderChange}>
            <option value="asc">Ascending</option>
            <option value="des">Descending</option>
          </FilterOrderSelect>
        </FilterOrderSection>
      </OrderContainer>
    </FilterOrder>
  );
}
