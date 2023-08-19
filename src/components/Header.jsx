import { Link } from "react-router-dom";
import image from "../assets/country.png";
import {
  Form,
  HeaderContainer,
  UlContainer,
  BurgerMenu,
  DropdownMenu,
} from "../stylesComponent/StyleHeader";
import iconSearch from "../assets/search.svg";
import { useState } from "react";
import Modal from "./Modal";
import iconBurger from "../assets/burger.svg";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div style={{ position: "relative" }}>
      <HeaderContainer>
        <div>
          <Link to={"/"}>
            <img src={image} alt="image" width={30} height={30} />
          </Link>
        </div>
        <button onClick={openModal}>
          <img src={iconSearch} alt="" width={25} />
          do a search
        </button>
        <Modal closeModal={closeModal} openModal={modalOpen}>
          <Form>
            <fieldset>
              <label htmlFor="">
                <img src={iconSearch} alt="" width={25} />
              </label>
              <input type="search" placeholder="Search a country" />
            </fieldset>
          </Form>
        </Modal>
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
    </div>
  );
}

export default Header;
