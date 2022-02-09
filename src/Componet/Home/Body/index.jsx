import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { HomeCon } from '../../../Context/Home/context'
import { Container, Card, Cards, Nava } from './styled'
const Asosiy = () => {
    const [data, setData] = useContext(HomeCon)
    return (

        <Container>
            <Nava>

                <Navbar />
            </Nava>
            <Cards>
                <div className=" row mt-50  justify-content-center">
                    {
                        data.map(({ id, video, text, desc, logo }) => {
                            return (
                                <div className="col-md-4 col-lg-3 col-sm-6">
                                    <Card key={id}>
                                        <div >
                                            <iframe className="img" width="560" height="250" src={video} title="YouTube video player" frameborder="0" allowfullscreen controls ></iframe>
                                        </div>
                                        <Card.Wrap>

                                            <img src={logo} className='logo' alt="" />
                                            <Card.Text>

                                                <Card.Title>{text}</Card.Title>
                                                <Card.Desc>{desc}</Card.Desc>
                                            </Card.Text>

                                        </Card.Wrap>
                                    </Card>
                                </div>
                            )
                        })
                    }

                </div>
            </Cards>
        </Container>
    )
}

export default Asosiy
