import React, { useContext } from 'react';
import { Container, Cont, Wrapper, Wrap, Title, } from './style'
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
                                <Icon className="icons" />
                                <Link key={id} exact to={path}><Title >{title}</Title></Link>
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
                                <Icon className="icons" />
                                <Link to={path}> <Title>{title}</Title></Link>
                            </Wrap>
                        )
                    })
                }
            </Wrapper>

        </Cont>





    </Container >;
}

export default Sidebar;
