import Modal from "./Modal";
import { Form } from "../stylesComponent/StyleHeader";
import iconSearch from "../assets/search.svg";
import CardsFiltered from "./CardsFiltered";
import { ModalSearchContainer } from "../stylesComponent/StyleModalSearch";
import SectionFilters from "./SectionFilters";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesFilterByName } from "../redux/features/country/actions";

function ModalSearch(props) {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    dispatch(getCountriesFilterByName(searchValue));
    if (!props.openModal) {
      setSearchValue("");
    }
  }, [dispatch, props.openModal, searchValue]);

  return (
    <ModalSearchContainer>
      <Modal closeModal={props.closeModal} openModal={props.openModal}>
        <Form>
          <fieldset>
            <label htmlFor="search">
              <img src={iconSearch} alt="iconSearch" width={25} />
            </label>
            <input
              type="search"
              placeholder="Search a country"
              onChange={handleSearch}
              id="search"
              name="search"
              value={searchValue}
            />
          </fieldset>
        </Form>
        <SectionFilters></SectionFilters>
        <CardsFiltered
          selectedCountries={props.selectedCountries}
          handleCheckChange={props.handleCheckChange}
        ></CardsFiltered>
      </Modal>
    </ModalSearchContainer>
  );
}

export default ModalSearch;
