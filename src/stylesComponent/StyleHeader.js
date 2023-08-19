import styled from "styled-components";

export const HeaderContainer = styled.header`
  font-size: 2.5rem;
  padding: 0px 10px;
  background: #1f1f20;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1px solid #fff;

  div {
    display: flex;
    align-items: center;
  }
  button {
    display: flex;
    max-width: 300px;
    width: 100%;
    align-items: center;
    background: none;
    background: #bdc3c7;
    border-radius: 999px;
  }
  .Header-not-display-mobile {
    @media (min-width: 1000px) {
      display: block;
    }
  }
`;

export const BurgerMenu = styled.section`
  cursor: pointer;
  img {
    @media (min-width: 1000px) {
      display: none;
    }
  }
`;
export const DropdownMenu = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: ${(props) => (props.open ? "block" : "none")};

  }
`;

export const UlContainer = styled.ul`
  
  display: ${(props) => (props.open ? "block" : "none")};
  gap: 10px;
  flex-wrap: wrap;
  transition: display 0.3s ease-in-out;
  li {
    text-align: center;
    list-style: none;
    a {
      color: #dce0e6;
      text-decoration: unset;
    }
    a:hover {
      color: #fff;
      text-decoration: dashed;
    }
  }
`;
export const Form = styled.form`
  border: 1px solid #1f1f1f;
  max-width: 1000px;
  border-radius: 3px;
  display: flex;
  margin: 0px;
  width: 100%;
  fieldset {
    border: unset;
    padding: unset;
    margin: 0;
    width: 100%;
    gap: 10px;
    display: flex;
    max-width: 80%;
    align-items: center;
    margin: 1%;

    input {
      font-size: 150%;
      border: unset;
      border-radius: 999px;
      width: 100%;
      max-width: 1000px;
      padding: 5%;
      &:focus {
        border: unset;
        outline: unset;
      }
    }
  }
`;
