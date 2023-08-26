import styled from "styled-components";

export const ListFiltered = styled.article`
  background: red;
  margin-bottom: 100px;
  height: 1500px;
  
  padding: 2%;
  width: 90%;
  border-radius: 10px;
  background: #3f3f3f;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3%;
  grid-auto-rows: auto;
`;
export const CardSection = styled.section`
  position: relative;
  width: 700px;
  display: flex;
  justify-content: flex-start;
  gap: 50px;
  height: 250px;
  background: #fffffff4;
  color: #1f1f20;
  border-radius: 5px;
`;

export const CardSectionFlag = styled.img`
  border-radius: 10px;

  width: 250px;
  height: 200px;
`;
export const CardSectionContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardSectionName = styled.h2`
  font-size: 100%;
  display: inline;
`;
export const CardSectionContinent = styled.span`
  display: inline;
  opacity: 0.5;
`;


export const CardInputCheckBox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border: 1px solid blue;
    border-radius: 999px;
    
    
    &:checked::before{
        content:"✔️";
        font-size: 30px;
        width: 100%; 
        height:100%;
        
        background-size: 100%;
        display: block;
    }

`

