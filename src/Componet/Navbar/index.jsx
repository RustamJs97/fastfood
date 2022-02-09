import React, { useContext } from 'react'
import { Container, Wrapper, Menu, Title, Titls, Input, Signal, Search, Menubar, Video, Keyboard, Mic } from './style'
import { HomeCon } from '../../Context/Home/context'
import { Fals } from '../../Context/all/context'
import logo from '../../Img/jpg/y.png'
import acount from '../../Img/jpg/acount.jpg'
import { App } from '../../Mock/asosiy'
const SideNav = () => {
    const [data, setData] = useContext(HomeCon)
    const [activ, setActiv] = useContext(Fals)


    const onSearch = (e) => {
        const newData = data.filter((v) => v["text"].toLowerCase().includes(e.target.value.toLowerCase()))
        setData(newData)
        e.target.value == '' && setData(App)
    }
    const abc = () => {
        setActiv(!activ)
    }
    // console.log(data);
    return (
        <Container>

            <Wrapper a >

                <Menu onClick={abc} />

                <img onClick={abc} src={logo} className='logo' alt="logo" />
                <Title>YouTube</Title>
            </Wrapper>

            <Wrapper c>
                <Input>
                    <input type="search" onChange={onSearch} placeholder="searchi" /> <Keyboard className='sv' /> <Search /></Input> <Mic />
            </Wrapper>


            <Wrapper b ><Video /><Menubar className='icon' /><Signal />
                <img src={acount} className='acount' alt="acount" /></Wrapper>
            <div className='r'>
                <img onClick={abc} src={logo} className='logo-r' alt="logo" />
                <Titls>YouTube</Titls>
            </div>
        </Container>
    )
}

export default SideNav
