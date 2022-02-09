import styled from 'styled-components';

export const Container = styled.div`
.icons{
   width: 40px;
   height: 40px;
   color: #fff;
}

@media screen and (max-width: 900px)  {
width: 0px;
}

`

export const Cont = styled.div`
   display: flex;
   flex-direction: column;
   width:  70px;
   height: 100vh;
   background: #212121; 
   position: sticky;
   z-index: 999;
   top: 0;
   overflow-y: hidden;
   overflow-x: hidden;
   padding: 10px 0 50px 0;
@media screen and (max-width: 900px)  {width: 0px;}
`
export const Wrapper = styled.div`
   width: 70px;
   display: flex;
   flex-direction: column;
   margin-top: 8px;
   background: #212121; 
@media screen and (max-width: 900px)  {width: 0px;}
   `
export const Wrap = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   height: 40px;
   transition: all 0.5s;
   margin: 10px 0;
   :hover{
      background: rgba(255, 255, 255, 0.1);
   }
@media screen and (max-width: 900px)  {
  width: 0;
  margin: 0;
.icons{
     width: 0px;
     height: 0px;}
}
`
export const Title = styled.div`
   color: #fff;
   font-size: 11px;
   margin-top: 5px;
@media screen and (max-width: 900px)  {
   font-size: 0px;
}
`

