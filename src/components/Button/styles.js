import styled from "styled-components";

export const Button = styled.button`

    width: 342px;
    height: 74px;


    background: ${props => props.backButton ? 'transparent' : 'rgba(0, 0, 0, 0.8)' };
    border-radius: 14px;
    border: ${props => props.backButton ?'1px solid #fff' : 'none'};
    
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top:10%;
    text-decoration: none;
 
  &:hover{
    opacity: 0.8;

  }

  &:active{
    opacity: 0.5;

  }

  img{
    transform: ${props => props.backButton ? 'rotateY(180deg)': ''}
  }


`