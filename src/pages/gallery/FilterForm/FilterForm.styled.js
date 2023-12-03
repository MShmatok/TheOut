import theme from 'CommonStyle/themeJSX';
import styled from 'styled-components';

export const DataListST = styled.datalist`
max-height: 272px;
width: 224px ;
padding: 14px 8px 14px 18px;

display: flex;
justify-content: flex-end;
align-items: flex-start;
gap: 8px;
/* flex-shrink: 0; */


border-radius: 14px;
border: 1px solid ${theme.colors.secondaryGrayBorder};
background:${theme.colors.primaryLight} ;
box-shadow: 0px 4px 36px 0px ${theme.colors.shadowInputDropDown}  ;
`

export const LabelST = styled.label`
position: relative;

display: flex;
flex-direction: column;
gap: 8px;

font-weight: 500;
font-size: 14px;
line-height: calc(18/14);
color: ${theme.colors.secondaryLight} ;
`
export const InputBrands = styled.input`
width: 224px;
color: ${theme.colors.primaryDark} ;
font-size: 18px;
font-weight: 500;
line-height: calc(20/18);

display: flex;
padding: 14px 18px 14px 18px;
justify-content: center;
align-items: center;

border-radius: 14px;
border: none;
background-color: ${theme.colors.secondaryGrayBG} ;

&::placeholder{
color: ${theme.colors.primaryDark} ;
}
`
export const DropDownBrands = styled.div`
position: absolute;
top: 78px;

padding: 14px 8px 14px 18px;

width: 100%;
max-height: 272px;

border-radius: 14px;
border: 1px solid ${theme.colors.secondaryGrayBorder};
background:${theme.colors.primaryLight} ;
box-shadow: 0px 4px 36px 0px ${theme.colors.shadowInputDropDown}  ;

display: flex;
flex-direction: column;

ul{
overflow-y: auto;
display: flex;
flex-direction: column;
gap: 8px;

    &::-webkit-scrollbar {
  width: 8px;
}

&::-webkit-scrollbar-track {
  background: transparent;
}

&::-webkit-scrollbar-thumb {
  background-color: ${theme.colors.secondaryGrayBorder};    
  border-radius: 10px;       
  border: 8px solid transparent;  
}

}
li{
color: ${theme.colors.secondaryGrayText} ;
font-size: 16px;
font-weight: 500;
line-height: calc(20/16);


&:hover, &:active{
color: ${theme.colors.primaryDark} ;
cursor: pointer;
}


}
`