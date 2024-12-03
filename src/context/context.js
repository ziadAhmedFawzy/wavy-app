import { createContext, useState } from "react";

export const ContextBox = createContext()

export default function Context({children}) {
    const [activate, setActivate] = useState('mainpage')

    const parent = {
        activate,
        setActivate
    }
    return <ContextBox.Provider value={parent}>{children}</ContextBox.Provider>
}