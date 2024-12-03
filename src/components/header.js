import Logo from "./logo";
import '../styles/style_components/header.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { ContextBox } from "../context/context";

export default function Header() {
    const [yAxis, setYAis] = useState(0);
    const [statusHeader , setStatusHeader] = useState()
    const { activate, setActivate } = useContext(ContextBox);

    useEffect(() => {
        const handleScroll = () => setYAis(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "الرئيسية", path: "/", key: "mainpage" },
        { name: "من نحن", path: "/about-wavy", key: "about" },
        { name: "انواع الستائر", path: "/curtains", key: "curtains" },
        { name: "ألبوم الصور", path: "/gallery-wavy", key: "gallery" },
        { name: "عملائنا", path: "/customers-wavu", key: "customers" },
        { name: "اتصل بنا", path: "/contact-us", key: "contact" },
    ];

    useEffect(()=> {
        if(window.location.pathname === '/') {
            if(yAxis > 300) {
                setStatusHeader('fixed-header' )
            }
            else {
                setStatusHeader('absolute-header')
            }
        }
        else {
            setStatusHeader('static-header')
        }
    },[yAxis, activate])
    console.log(statusHeader)
    return (
        <div 
            className={`main-header ${statusHeader}`} 
            style={ yAxis <= 300 ? 
            {backgroundColor: 'transparent'} :
            {background: 'var(--secondary-color)'}
            }
        >
            <header>
                <h1>
                    <Link to='/'>
                        <Logo size="120px" />
                    </Link>
                </h1>
                <ul>
                    {links.map((link) => (
                        <li
                            key={link.key}
                            onClick={() => setActivate(link.key)}
                            className={activate === link.key ? "activate" : ""}
                        >
                            <Link
                                style={link.key !== 'main' ? { color: 'var(--main-color)' } : {}}
                                to={link.path}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className="booking-now">احجز الأن</button>
            </header>
        </div>
    );
}
