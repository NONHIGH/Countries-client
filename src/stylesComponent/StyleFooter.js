import styled from 'styled-components';

export const FooterMain = styled.footer`
    height: 100px;
    display: flex;
    border-top: 10px solid #dce0e6;
    justify-content: center;
    background: #1f1f20;
    margin: unset;
    ;
`

export const SectionFooterLink = styled.section`
    display:flex;
    

    ul{
        display: flex;
        gap: 10px;
        margin: unset;
        li {
            list-style: none;
            
            a{
                
                img{
                    transition: 340ms;
                    border-radius: 999px;
                    &:hover{
                        background: white;
                    }
                    width: 50px;
                }
            }
        }
    }
`