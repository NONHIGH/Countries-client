import styled from "styled-components";

export const HeaderContainer = styled.header`
  font-size: 2.5rem;
  padding: 0px 10px;
  background: #1f1f20;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1px solid #fff;

  @media (max-width: 1000px) {
    justify-content: space-evenly;
  }
  div {
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;
    img{
      width: 100%;
      object-fit: cover;
    }
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
  display: ${(props) => (props.open ? "flex" : "none")};
  gap: 10px;
  background:#353634;
  margin: 0;
  justify-content: center;
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
  display: flex;
  min-height: 100px;
  max-height: 150px;
  justify-content: center;
  border: 1px solid #1f1f1f;
  max-width: 700px;
  border-radius: 3px;
  margin: 10px;
  
  fieldset {
    border: unset;
    padding: unset;
    margin: 0;
    
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

export const HeaderFormSearchBar = styled.form`
  display: flex;
  background: #718093;
  width: 100%;
  max-width: 500px;
  height: 100%;
  min-height: 3rem;
  border-radius: 999px;
`;
export const HeaderLabelSearchBar = styled.label`
  display: flex;
  justify-content: space-around;
  background: #7f8fa6;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 46px;
    height: auto;
    min-width: 20px;
  }
`;
export const HeaderSearchBar = styled.input`

  border: none;
  border-radius: 20px;
  margin: 15px;
  padding: 10px;
  font-size: 1.7rem;

`;

export const Button = styled.button`
  border: none;
  text-align: center;
  background: linear-gradient(to bottom, #273c75, #192a56);
  padding: 2%;
  font-size: 1.5rem;
  width: 100%;
  max-width: 140px;
  border-radius: 20px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    color: #fffeef;
    background: linear-gradient(to bottom, #192a56, #273c75);
    box-shadow: 0px 10px 10px brown;
  }
`;
