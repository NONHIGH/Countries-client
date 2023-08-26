import styled from "styled-components";

export const MainFormContainer = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  background: #2b4c7e;
  font-size: 2.3rem;
  display: flex;
  flex-direction: column;
;
`;

export const FormContainer = styled.form`
  position: relative;
  height: 100%;
  min-width: 50vw;
  display:flex;
  flex-direction: column;
  margin: 10%;
  border: #E3DAC9 solid 1px;
  border-radius: 9px;
  padding: 10%;
  padding-top: 0;
  h1 {
    text-align: center;
    text-decoration: underline;

  }

  .errorInput{
    outline: #ff3366 solid 5px;
    &:focus{
      outline: 5px #001449 solid;
      
    }
  }
  p {
    
  }
`;

export const FormFieldSetContainer = styled.fieldset`
  min-height: 50vh;
  width: 100%;
  display: flex;
  border: none;
  flex-direction: column;
  text-align: start;
  position: relative;
`;

export const FormButtonModal = styled.button`
  background: #eee;
  margin-top: 5%;
  border-radius: 20px;
  height: 3.5rem;
  border: none;
  
  font-size: 1.3rem;
  transition: .3s;

  &:hover{
    background: #e4e3e2;
    box-shadow: 0px 2px 10px #e4e3e2;
  }
`

export const FormLabel = styled.label`
    color: #aceee3;
    text-decoration: underline;
    &:hover{
      cursor: pointer;
    }
`

export const FormInput = styled.input`
  min-height: 50px;
  padding: 3%;
  color: #3f0f7a;
  font-size: 1.8rem;
  max-width: 50vw;
  border-radius: 20px;
  margin-bottom: 5%;
  &:focus{
    outline: none;
    border: none;
  }
`;


export const FormSelect = styled.select`
  max-width: 50vw;
  font-size: 1.5rem;
  padding: 3%;
  border-radius: 20px;
  &:focus{
    outline: unset;
  }
  &:hover{
    background: #E3DAC9;
  }
`;

export const FormButton = styled.button`
margin-top: 13% ;
  background: #606d80 ;
  
  font-size: 2rem;
  padding: 15px ;
  border-radius: 20px;
  outline: unset;
  transition: .3s;
  &:hover{
    cursor: pointer;
    color: #dce0e6;
    background: #1f1f20;
  }
  &:active{
    background: linear-gradient(to bottom, #606d80, #1f1f20 );
  }
  
`

export const RangeInput = styled.input`
  width: 90%;
  height: 3rem;
  appearance: none;
  background: #001848;
  border-radius: 16px;
  border: 2px solid #303030;
  padding: 1rem;
  
  &::-webkit-slider-runnable-track {
    
    height: 50%;
    background: #ffeaad;
    border-radius: 8px;

  }
`

export const RangeInputT = styled(RangeInput)`
  &::-webkit-slider-thumb{
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    background: #0b2e59;
    border-radius: 999px;
    cursor: pointer;
  }
  &:focus{
    outline: none;
  }

`


export const ListCountriesSelected = styled.ul`
  display: flex;
  max-height: 500px;
  min-height: 200px;
  background: #cad1c3;
  flex-wrap: wrap;
  width: 80%;
  gap: 5%;
  border-radius: 20px;
  overflow-y: auto;
  
  li{
    border-radius: 5px;
    margin: 2%;
    font-size: 2rem;
    list-style: none;
    background: #2b2b2b;
    display: flex;
    height: 100%;
    transition: .4s;
    &:hover{
      cursor: pointer;
      box-shadow: 0px 2px 30px red;
    }
  }
`