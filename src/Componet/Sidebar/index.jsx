import React, { useContext } from 'react';
import { Container, Cont, Wrapper, Wrap, Title, Past, activeStyle } from './style'
import { SidebarIcon } from '../../Mock/Sidebar'
import { Link } from 'react-router-dom'
const Sidebar = () => {

    return <Container>


        <Cont>
            <Wrapper >

                {
                    SidebarIcon.a.map(({ id, title, Icon, path }) => {
                        return (
                            <Wrap key={id}>
                                <Icon className="icon" />
                                <Link activeStyle={activeStyle} key={id} exact to={path}><Title >{title}</Title></Link>
                            </Wrap>
                        )
                    })
                }
            </Wrapper>

            <Wrapper >
                {
                    SidebarIcon.b.map(({ id, title, Icon, path }) => {
                        return (
                            <Wrap key={id}>
                                <Icon className="icon" />
                                <Link to={path}> <Title>{title}</Title></Link>
                            </Wrap>
                        )
                    })
                }
            </Wrapper>

            <Wrapper >
                <h3>obunalar</h3>
                {
                    SidebarIcon.podpiska.map(({ id, title, img }) => {
                        return (
                            <Wrap key={id}>
                                <img src={img} alt="ss" className="img" />
                                <Title>{title}</Title>
                            </Wrap>
                        )
                    })
                }
                <div className="yana"><Past /><Title>pastga</Title> </div>
            </Wrapper>
        </Cont>


    </Container >;
}

export default Sidebar;
