import styled from 'styled-components';

export const CardStyle = styled.article`
    background: #567ebb;
    font-size: 2.1rem;
    border-end-end-radius: 15px;
    border-start-end-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 250px;
    padding: 5px;
    transition: .3s;
    position: relative;

    &:hover{
        transform: scale(1.1);
    }
    footer {
        width: 100%;
        margin: auto;
        border-top: 1px solid #2b4c7e;
        padding-top: 10px;
        text-align:center;
        ;
        a {
            display: inline-block;
            color: #dce0e6;
            text-decoration: unset;
        }
    }
`

export const CardSectionImage = styled.section`
    border: 1px solid #ffeeda;
    display: flex;
    border-radius: 11px;
    img {
        border-radius: 10px;
        width: 210px;
        height: 120px;
        object-fit: cover;
    }
`
export const CardSectionSpan = styled.section`
    width: 100%;
    text-align: center;
    span{
        max-height: fit-content;
    }
`

