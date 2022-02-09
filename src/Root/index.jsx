import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'
import SidebarM from '../Componet/Sidebarmobile';
import Sidebar from '../Componet/Sidebar';
import Home from '../Page/Home'
import { Container, Navba, Sidebars, Bodyrouter } from './style'
import Navbar from '../Componet/Navbar'
import Navigator from '../Page/Navigator'
import Subscriptions from '../Page/Subscriptions'
import Libary from '../Page/Libary'
import History from '../Page/History'
import Watchlater from '../Page/Watchlater'
import { Fals } from '../Context/all/context'
const Root = () => {
    const [activ, setActiv] = useContext(Fals)
    return (<Container>
        <Navba>
            <Navbar />
        </Navba>
        <Bodyrouter>
            <Sidebars>
                {
                    activ ?
                        <SidebarM /> :
                        <Sidebar />
                }
            </Sidebars>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/navigator" element={<Navigator />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
                <Route path="/libary" element={<Libary />} />
                <Route path="/history" element={<History />} />
                <Route path="/watchlater" element={<Watchlater />} />
            </Routes>
        </Bodyrouter>
    </Container >)
}

export default Root;
