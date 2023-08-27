import { Link } from "react-router-dom";
import image from "../assets/world.png";
import {
  HeaderContainer,
  UlContainer,
  BurgerMenu,
  DropdownMenu,
  HeaderSearchBar,
  HeaderFormSearchBar,
  HeaderLabelSearchBar,
  
  Button
} from "../stylesComponent/StyleHeader";
import iconSearch from "../assets/search.svg";
import { useEffect, useState } from "react";
import { getCountriesFilterByName } from '../redux/features/country/actions';
import { resetCountries, setCurrentPage } from "../redux/features/country/countrySlice";



import iconBurger from "../assets/burger.svg";
import { useDispatch } from "react-redux";

function Header() {


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const onChange = (event) =>{
    setInputValue(event.target.value);
  }

  const resetCountriesFiltered = ()=>{
    dispatch(resetCountries());
    dispatch(setCurrentPage(1));
  }

  useEffect(()=>{
    dispatch(getCountriesFilterByName(inputValue))
  }, [dispatch, inputValue])
  

  return (
    <>
      <HeaderContainer>
        <div>
          <Link to={"/"}>
            <img src={image} alt="image" />
          </Link>
        </div>
        <HeaderFormSearchBar>
        <HeaderLabelSearchBar htmlFor="searchBar">
          <img src={iconSearch} alt="icon" />
        </HeaderLabelSearchBar>
        <HeaderSearchBar
          type="search"
          value={inputValue}
          onChange={onChange}
          id='searchBar'
          name='searchBar'
          placeholder="search"
        />
        </HeaderFormSearchBar>
        <Button onClick={resetCountriesFiltered}>
          Reset
        </Button>
        <UlContainer className="Header-not-display-mobile">
          <li>
            <Link to={"/form"}>Create Activity</Link>
          </li>
        </UlContainer>
        <BurgerMenu onClick={toggleMenu}>
          <img src={iconBurger} alt="" width={100} />
        </BurgerMenu>
      </HeaderContainer>
      <DropdownMenu open={menuOpen}>
        <UlContainer open={menuOpen}>
          <li>
            <Link to={"/form"}>Create Activity</Link>
          </li>
        </UlContainer>
      </DropdownMenu>
    </>
  );
}

export default Header;
