import React, { useState, useContext } from 'react'
import { Container, Wrapper } from './style'
import { HomeCon } from '../../../Context/Home/context'

const NavbarHome = () => {

    const [active, setActive] = useState('a')
    const [ia, setIa] = useState(true)
    const [data, setData] = useContext(HomeCon)

    const onSearch = (e) => {
        e.preventDefault()
        const newData = data.filter((v) => v["fill"].toLowerCase().includes(e.target.value.toLowerCase()))
        setActive(e.target.value)
        setData(newData)
    }
    return (


        <Container >
            <input type="text" name='active' value={(e) => active(e.target.value)} onChange={onSearch} />
            <Wrapper
                onClick={() => { ia && setActive('a') }}
                ac={active === 'a'}>Kino</Wrapper>
            <Wrapper
                onClick={() => { ia && setActive('b') }}
                ac={active === 'b'}>Music</Wrapper>
            <Wrapper
                onClick={() => { ia && setActive('c') }}
                ac={active === 'c'}>Rap</Wrapper>
            <Wrapper
                onClick={() => { ia && setActive('d') }}
                ac={active === 'd'}>Efir</Wrapper>
            <Wrapper
                onClick={() => { ia && setActive('e') }}
                ac={active === 'e'}>Reklama</Wrapper>
            <Wrapper
                onClick={() => { ia && setActive('f') }}
                ac={active === 'f'}>Qiziqarli</Wrapper>
            <Wrapper
                onClick={() => { ia && setActive('g') }}
                ac={active === 'g'}>4K</Wrapper>
            <Wrapper
                onClick={() => { ia && setActive('h') }}
                ac={active === 'h'}>Sport</Wrapper>
            <Wrapper
                onClick={() => { ia && setActive('i') }}
                ac={active === 'i'}>XitMus</Wrapper>
            <Wrapper
                onClick={() => { ia && setActive('j') }}
                ac={active === 'j'}>kino</Wrapper>
            <Wrapper
                onClick={() => { ia && setActive('k') }}
                ac={active === 'k'}>serial</Wrapper>
            <Wrapper
                onClick={() => { ia && setActive('l') }}
                ac={active === 'l'}>hayvonot</Wrapper>
        </Container>
    )
}

export default NavbarHome
