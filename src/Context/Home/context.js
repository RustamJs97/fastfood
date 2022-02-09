import React, { createContext, useState } from 'react';
import { App } from '../../Mock/asosiy'

export const HomeCon = createContext()
export const CONTEXT = ({ children }) => {
    const [data, setData] = useState(App)

    return (<HomeCon.Provider value={[data, setData]}>
        {children}
    </HomeCon.Provider>)
};

export default CONTEXT