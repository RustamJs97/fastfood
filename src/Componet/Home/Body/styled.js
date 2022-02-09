import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   width: 100%;
   position: absolute;
   overflow-x: hidden;
   overflow-y: scroll;
   padding: 0px 0 70px 0;
.img{
       width: 100%;
       height: 160px;
       background-size: contain;
    }
.logo{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
   }
.aa{
       margin-top: 50px;
   }

`
export const Nava = styled.div`
    width: 100%;
    position: fixed;
    z-index: 9999;
    background: #fff;
`
export const Card = styled.div`
    z-index: -1;
    display: flex;
    flex-direction: column;

:hover{
    box-shadow: 0 0 10px rgb(1,1,1,0.6);}
@media screen and (max-width: 1221px)  {
    /* width: 600px; */

}
`
export const Cards = styled.div`
margin-top: 50px;

`
Card.Wrap = styled.div`
    display: flex;
`
Card.Text = styled.div`
    display: flex;
    flex-direction: column;
`
Card.Title = styled.div`
    font-size: 15px;
    color: #fff;
`
Card.Desc = styled.div`
    font-size: 12px;
    color: #919191;
`
