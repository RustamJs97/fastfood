import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   height: 35px;
   background: #212121;
   border-top: 1px solid #555555;
   border-bottom: 1px solid #555555;
   overflow-x: scroll;
`

export const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 70px;
   height: 20px;
   border: ${({ ac }) => ac ? '1px solid #888888' : '1px solid #666666'} ;
   color: ${({ ac }) => ac ? '#fff' : '#989898'} ;
   background: ${({ ac }) => ac ? 'rgba(255,255,255, 0.2)' : 'rgba(255,255,255, 0.04)'} ;
   border-radius: 3px;
   font-size: 12px;
   margin: 0 10px;
   cursor: pointer;
   :hover{
      box-shadow: inset 0 0 15px rgba(255,255,255, 0.2);

   }
`