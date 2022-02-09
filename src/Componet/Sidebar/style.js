import styled from 'styled-components';
import { ReactComponent as a8 } from '../../Img/Svg/a9.svg'

export const Container = styled.div`

.icon{
   color: #fff;
   margin: 0 0 0 3px;
}
.img{
   width: 30px;
   height: 30px;
   border-radius: 50%;
}
h3{
   font-size: 20px;
   color: #505050;
   margin: 0 0 10px 26px;
}
.yana{
   display: flex;
   height: 40px;
   align-items: center;
   :hover{
      background: rgba(255, 255, 255, 0.1);
   }
}
`

export const Cont = styled.div`
   display: flex;
   flex-direction: column;
   width: ${({ min }) => min ? '60px' : '235px'};
   min-width: 235px;
   height: 100vh;
   background: #212121; 
   position: sticky;
   z-index: 999;
   top: 0;
   overflow-y: hidden;
   overflow-x: hidden;
   transition: all 0.5s;
   padding: 0 0 50px 0;
   :hover{
   overflow-y: scroll;
  }
`
export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 8px;
   background: #212121; 
   border-bottom: 1px solid rgba(255, 255, 255, 0.2);
   padding: 5px 0 10px 0;
   
`
export const Wrap = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   height: 40px;
   padding: 10px 0  10px 25px;
   transition: all 0.5s;
   :hover{
      background: rgba(255, 255, 255, 0.1);
   }
`

export const Title = styled.div`
   color: #fff;
   font-size: 14px;
   line-height: 20px;
   margin: 0 26px;
`
export const Past = styled(a8)`
width: 16px;
height: 16px;
margin: 0 10px 0  30px;
`
export const activeStyle = {
   color: 'white',
   background: '#fff',
   padding: '10px 0',
};