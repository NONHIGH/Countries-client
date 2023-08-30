import styled, { keyframes } from 'styled-components';

export const ListCardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 100px;
    
`

export const ListCardPageContainer = styled.div`
    
    display: flex;
    justify-content: space-between;
    gap: 5%;
    width: 100%;
    max-height: 220px;
    
    
`

export const ListCardsButtonPage = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    button{
        border: none;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #142C7E;
        width: 80px;
        height: 35px;
        border-radius:4px;
        color: #f8fafa;
        transition: .2s;
        &:hover{
            cursor: pointer;
            box-shadow: 0.1px 2px 10px #142C7E;
            background: linear-gradient(to right, #062798, #142C7E);
        }
        &:active{
            background: linear-gradient(to right, #142C7E, #062798);
        }
    }
`

export const PageCurrentTitle = styled.h4`
    text-align: center;
    margin: 10px 0px;
    width: 100%;
    font-size: 3rem;
`

const rotateWorld = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`
export const BackgroundError = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    
    justify-content: center;
    align-items: flex-start;
    h1{
        color: #ff28ff;
    }
    img{

        width: 1000px;
        height: 1000px;
        animation: ${rotateWorld} 20s linear infinite;
    }
`
