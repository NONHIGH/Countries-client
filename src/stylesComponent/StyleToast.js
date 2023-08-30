// import styled from 'styled-components';


// export const ToastContainer = styled.div`
//     position: fixed;
//     bottom: 200px;
//     left: 50%;
//     transform: translateX(-50%);
//     padding: 10px 20px;
//     border-radius: 4px;
//     font-size: 1rem;
//     z-index: 1000;
//     transition: opacity 0.3s ease-in-out;
//     /* opacity: ${(props) => (props.showtoast ? 1 : 0)};
//     display: ${(props) => (props.showtoast ? "block" : "none")}; // Controlar la visibilidad con display */
//     opacity: ${(props) => (props.isVisible ? 1 : 0)};
//     display: ${(props) => (props.isVisible ? "block" : "none")};
//     background-color: ${({ type }) =>
//         type === 'error' ? '#f44336' : type === 'success' ? '#4caf50' : '#2196f3'
//     };
//     color: #fff;
// `;

import styled from 'styled-components';

export const ToastContainer = styled.div`
position: fixed;
bottom: 20px;
left: 50%;
border-radius: 5px;
transform: translateX(-50%);
padding: 10px 20px;
border-radius: 4px;
font-size: 5rem;
z-index: 1000;
transition: opacity 0.3s ease-in-out;
opacity: ${(props) => (props.$isVisible ? 1 : 0)};
background-color: ${({ type }) =>
        type === "error"
            ? "#f44336"
            : type === "success"
                ? "#4caf50"
                : "#2196f3"};
color: #fff;
`;