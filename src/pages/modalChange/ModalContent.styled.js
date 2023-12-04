import theme from 'CommonStyle/themeJSX';
import { CardTitleWrapper } from 'components/CarCard/CarCard.styled';
import styled from 'styled-components';

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