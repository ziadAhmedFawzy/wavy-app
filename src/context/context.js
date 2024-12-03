import { createContext, useState } from "react";

export const ContextBox = createContext()

export default function Context({children}) {
    const [activate, setActivate] = useState('mainpage')
    const [activeNavbar, setActiveNavbar] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const parent = {
        activate,
        setActivate,
        navbar, 
        setNavbar,
        activeNavbar, 
        setActiveNavbar,
    }
    return <ContextBox.Provider value={parent}>{children}</ContextBox.Provider>
}