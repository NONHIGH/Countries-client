import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #ffffffff;
  padding: 0 10px 10px 10px;
  border-radius: 20px;
  box-shadow: 100px 10px 10px rgba(0, 0, 0, 0.2);
  width: 99.8%;
  
  div {
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
      height: 100vh;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
    }
  }
`;
