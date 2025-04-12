'use client'
import {createContext, PropsWithChildren, useState} from "react";

const FirstLoadContext = createContext(null)

const FirstLoadProvider = ({ children } :PropsWithChildren) => {

    const [isFirstLoad, setIsFirstLoad] = useState(true)

    return (
        <FirstLoadContext.Provider value={{isFirstLoad, setIsFirstLoad}}>
            {children}
        </FirstLoadContext.Provider>
    );
};

export default FirstLoadProvider;
