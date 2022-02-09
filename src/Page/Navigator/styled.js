import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center; 
   width: 100%;
   height: 100vh;
   color: #555554;
   h1{
      color: #3281a8;
   }
   h2{
      color: #ad672a;
   }
   h3{
      color: white;
   }
   img{
      height: 40vh;
      border-radius: 10%;
   }
@media screen and (max-width: 900px)  {

   h1{
     font-size: 30px
   }
   h2{
      font-size: 25px

   }
   h3{
      font-size: 15px

   }
 
}
`