import theme from 'GlobalStyle/themeJSX';
import { CardTitleWrapper } from 'components/CarCard/CarCard.styled';
import styled from 'styled-components';

export const BtnClose = styled.div`
cursor: pointer;
position: absolute;
top: 16px;
right: 16px;
  transition: all ${theme.animation.cubicBezier};

svg{
stroke: black;

}
&:hover{
    scale: 1.2;
}
`



export const ModalContainer = styled.div`
position: absolute;
top: 50%;
left: 50%;

transform: translate(-50%, -50%);
display: flex;
flex-direction: column;

width: 541px;
padding:40px;
border-radius: 24px;

background-color: #fff;

img{
    border-radius: 14px;
    margin-bottom: 14px;

    width:461px;
        height:248px;
        object-fit: cover;
}
`

export const ModalTitleWrapper = styled(CardTitleWrapper)`
margin-bottom: 8px;
h2{ 
    font-size: 18px;
font-weight: 500;
line-height: calc(24/18);
}
   
`
export const ModalDiscretion = styled.p`
color: ${theme.colors.primaryDark};

font-size: 14px;
line-height: calc(20/14);
margin-bottom: 24px;
`

export const ModalSubTitle = styled.h3`
font-size: 14px;
font-weight: 500;
line-height: calc(20/14);
margin-bottom: 8px;
`

export const RentalConditions = styled.p`
display:flex;
align-items: baseline;
justify-content: baseline;
padding: 7px 14px;

font-family: Montserrat;
font-size: 12px;

font-weight: 400;
line-height: calc(18/12);
letter-spacing: -0.24px;

border-radius: 35px;
background: #F9F9F9;

span{
   color: ${theme.colors.primaryAccent};
font-weight: 600;
}

`

export const RentalConditionsWrapper = styled.div`
display: flex;
gap: 8px;
flex-wrap: wrap;
margin-bottom: 24px;
`