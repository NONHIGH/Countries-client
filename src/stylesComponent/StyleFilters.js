import styled from "styled-components";

export const FilterOrder = styled.div`

  display: flex;
  max-height: 200px;
  width: 98%;
  position: sticky;
  top: 0px;
  z-index: 900;
  
`;

export const FiltersContainer = styled.article`
  padding: 1%;
  font-size: 2.3rem;
  width: 100%;
  display: flex;
  gap: 3%;
  justify-content: center;
  background: #005bc5;
  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;
  margin-right: 1%;
`;
export const OrderContainer = styled.article`
  padding: 1%;
  font-size: 2.3rem;
  width: 100%;
  display: flex;
  gap: 3%;
  justify-content: center;
  background: #012677;
  color: #f1f2f6;
  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;
  margin-left: 1%;
`;

export const FilterOrderSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1%;
`;

export const FilterOrderLabel = styled.label`
    margin: 0.5%;
`;

export const FilterOrderSelect = styled.select`
  font-size: 1.5rem;
  padding: 5%;
  border: 1px solid #0f3f7a;
  border-radius: 999px;
  option {
    color: #f38f5f;
    background: #0f3f7a;
  }
`;
