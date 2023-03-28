import styled from 'styled-components'
import Backgraud from '../../assets/bg image.svg'



// componentes sempre com letra maiuscula 
export const Container = styled.div`
    background: url("${Backgraud}");//Como tem as aspas, ele vai transformar tudo em texto
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
`

export const Image = styled.img`

    margin-top: 30px;

    @media screen and (max-width:500px) {
        width: 50%;
    }
   
`


export const InputLabel = styled.p`

    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    margin-left: 25px;
`
export const Input = styled.input`

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 342px;
    height: 58px;
    margin-bottom: 34px;
    border: none;
    outline: none;

    padding-left: 25px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
   
`





