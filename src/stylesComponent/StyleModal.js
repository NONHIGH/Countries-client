import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;  
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  article {
    position: absolute;
    z-index: 100;
    width: 50%;
    height: 90%;
    background: #ffffffff;

    padding: 0 10px 10px 10px;
    border-radius: 20px;
    box-shadow: 100px 10px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 768px) {
      width: 100%;
    }

    .Modal-button-container {
      button {
        width: 10%;
        margin-top: 10px;
        top: 10px;
        left: 10px;
        display: inline;
        text-align: center;
        background: none;
        border: none;
        cursor: pointer;
        color: #888;
        font-size: 1em;
        border-radius: 999px;
        &:hover {
          outline: 1px solid #000;
          color: #000;
          background: red;
        }
      }
    }

    .Modal-content-container {
      margin: 20px;
      display: flex;
      justify-content: center;
    }
  }
`;
