import styled from 'styled-components';
import { ReactComponent as bar } from '../../Img/Svg/bar.svg'
import { ReactComponent as signal } from '../../Img/Svg/signal.svg'
import { ReactComponent as search } from '../../Img/Svg/search.svg'
import { ReactComponent as menu } from '../../Img/Svg/menu.svg'
import { ReactComponent as video } from '../../Img/Svg/Vector.svg'
import { ReactComponent as keyboard } from '../../Img/Svg/key.svg'
import { ReactComponent as mic } from '../../Img/Svg/mic.svg'


export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   height: 56px;
   background: #212121;
.logo{
    width: 36px;
    height: 36px;
    margin: 0 0px 0 25px;}

.logo-r{width: 0px;}
.acount{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 0 35px  0 25px ;}
.icon *{
    stroke: white;
    fill: white;}
@media screen and (max-width: 900px)  {
.logo-r{
    width: 36px;
    height: 36px;
    margin: 0 0px 0 25px;}
.logo{width: 0px}
}
.r{
display: flex;
flex-direction: row;
align-items: center;
}
`

export const Title = styled.div`
    font-size: 20px;
    color: #fff;
@media screen and (max-width: 900px)  {
    font-size: 0px;

}

`
export const Titls = styled.div`
    font-size: 0px;
    color: #fff;
@media screen and (max-width: 900px)  {
    font-size: 20px;
    margin: 0 5px;
}
`

export const Wrapper = styled.div`
    display: flex;
    width: ${({ a }) => a ? '300px' : '100%'};
    width: ${({ b }) => b && '250px'};
    padding: ${({ c }) => c && '0 5%'};
    justify-content: ${({ a }) => a ? 'start' : 'center'};
    align-items: center;
@media screen and (max-width: 900px)  {
    display: ${({ c }) => c && 'none'};
    display: ${({ b }) => b && 'none'};
}
`
export const Input = styled.div`
    display: flex;
    width: 80%;
    height: 40px;
    align-items: center;
    background: #404040;
    margin-left: 8%;
    border: 1px solid #808080;
input{
    width: 100%;
    height: 40px;
    border: none;
    background: #404040;
    color: white;
    font-size: 18px;
    padding: 0 5px;
    background: rgba(255,255,255,0.1);
}
@media screen and (max-width: 900px)  {
    width: 0%;
}
`
export const Menu = styled(bar)`
    display: flex;
    width: 18px;
    height: auto;
    margin-left: 28px;
`
export const Keyboard = styled(keyboard)`
    display: flex;
    width: 55px;
    height: 40px;
    padding: 0 10px;
    border-right: 1px solid #808080;
    background: rgba(255,255,255,0.1);

`
export const Search = styled(search)`
    display: flex;
    width: 20px;
    height: auto;
    margin: 0 22px;
`
export const Mic = styled(mic)`
    display: flex;
    width: 40px;
    height: auto;
    margin: 15px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    padding: 10px;
    margin: 0 40px 0 8px;
`
export const Video = styled(video)`
    display: flex;
    width: 20px;
    height: auto;
    margin: 15px;
`
export const Menubar = styled(menu)`
    display: flex;
    width: 20px;
    height: auto;
    margin: 15px;
`
export const Signal = styled(signal)`
    display: flex;
    width: 17px;
    height: auto;
    margin: 15px;
`
