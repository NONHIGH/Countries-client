import styled from "styled-components";

export const DetailContainer = styled.main`
  margin: auto;
  display: flex;
  justify-content: center;
  width: 98%;
  height: 100%;
  margin-top: 15px;
  font-size: 2rem;
  article {
    position: relative;
    border-end-end-radius: 20px;
    border-start-start-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* grid-template-rows: 1fr 1fr 1fr; */
    background: #567ebb;
    align-items: center;
    grid-template-areas: 
    "flag flag name"
    "flag flag continent"
    "capital area subregion"
    "population population population"
    ;

    @media (max-width:1000px) {
      display: flex;
      flex-direction: column;
      background: #2b4c7e;
      height: 100%;
      min-height: 50vh;
      width: 90%;
    }
    .Section-flag{
      grid-area: flag;
      margin: 17px;
      width: 100%;
      text-align: center;
      img {
        margin: 0.6%;
        border-radius: 10px;
        outline:1px darkblue dashed;
        width: 80%;
        min-width: 200px;
      }
    }
    .Section-name, .Section-continent, .Section-subregion, .Section-capital, .Section-area,.Section-population{
      margin: 17px;
      padding: 3%;
      transition: .2s;
      &:hover{
        background: #2b4c7e;
      }
    }
    .Section-name{
      grid-area: name;
    }
    .Section-continent{
      grid-area: continent;
    }
    .Section-subregion{
      grid-area: subregion;
    }
    .Section-capital{
      grid-area: capital;
    }
    .Section-area{
      grid-area: area;
    }
    .Section-population{
      grid-area: population;
    }
  }
`;

export const BackToHomePage = styled.div`
      position: absolute;
      width: 5%;
      left: 10px;
      top: 10px;
      transition: .2s;
      img{
        background: #606d80;
        border-radius: 999px;
        transition: .2s;
        &:hover{
          transform: scale(1.01);
        border-radius: 999px;
        background: #3f3f3f;
        }

      }
    
`

export const ListOfActivities = styled.div`
  background: red;

`

export const DivSpan = styled.div`
  color: #222;
        span{
          color: #fff;
        }
`