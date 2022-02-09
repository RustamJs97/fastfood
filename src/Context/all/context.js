import React, { createContext, useState } from 'react';

export const Fals = createContext()
export const CONTEXT = ({ children }) => {
    const [data, setData] = useState(false)

    return (<Fals.Provider value={[data, setData]}>
        {children}
    </Fals.Provider>)
};

export default CONTEXT