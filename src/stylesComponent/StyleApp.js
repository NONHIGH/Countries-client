import styled from "styled-components";

export const MainApp = styled.main`
  color: #1f1f1f;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: url("https://pixelz.cc/wp-content/uploads/2018/12/world-map-with-countries-uhd-4k-wallpaper.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  section {
    h1 {
      font-weight: 1000;
    }
      text-align: center;
    div {
      margin-bottom: 150px;
      border-radius: 15px;
      transition: 0.3s;
      &:hover {
        transform: scale(1.2);
        background: linear-gradient(to top, #567ebb, #2b4c7e);
      }
    }
    a {
      text-decoration: unset;
      font-weight: 900;
      color: #1f1f20;
      border-radius: 15px;
      outline: 3px solid #567ebb;
      &:active {
        background: linear-gradient(to bottom, #567ebb, #2b4c7e);
      }
    }
  }
`;
