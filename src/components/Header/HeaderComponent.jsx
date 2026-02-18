import "./HeaderComponent.css"
import { useState, useEffect } from "react";
import menuIcon from "../../icons/Menu.svg";
import profileImg from "../../assets/imgs/profileImg.jpg"

function HeaderComponent({ scrollToSection, refs }) {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // lg


    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);


            if (!mobile) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const openMenu = () => {
        if (!isMobile) return;
        setMenuOpen(prev => !prev);
    };

    const handleNavClick = (ref) => {
        scrollToSection(ref);
        setMenuOpen(false);
    };

    return (
    <header className="header h-15 w-screen shadow-md bg-[#23272F] flex items-center justify-between text-white fixed left-0 top-0 z-15  lg:justify-center">
        <div
            className={`fixed inset-0 bg-[rgba(0,0,0,.45)] z-10 
            ${menuOpen ? "block" : "hidden"} lg:hidden`}
            onClick={openMenu}
        />

        <div className=" w-full h-full justify-between flex flex-row lg:w-5xl lg:justify-between lg:items-center">
            <div className="header-title flex flex-row items-center justify-center gap-1">
                <div className="h-full flex flex-col justify-center">
                    <img src={profileImg} alt="Profile image" className="h-10 rounded-[50%]"/>
                </div>
                <div className="flex flex-col justify-center items-start h-full">
                    <h4 className="title-container text-[1rem] md:text-[1rem] lg:text-[1.1rem] relative">
                        Matías Buffa
                    </h4>
                    <h5 className="text-[.75rem] absolute top-8">Desarrollador Web</h5>
                </div>
                
            </div>

        <div className="header-btns flex flex-row items-center lg:hidden">
            <img 
                src={menuIcon}
                alt="Menú" 
                className="cursor-pointer w-6 h-6 invert"
                onClick={openMenu}
            />
        </div>

        <nav
            className={`fixed top-0 left-0 z-20 h-screen w-62.5 bg-[#23272f]
            transition-transform duration-300 ease-in-out
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}
            md:w-80
            lg:static lg:h-full lg:w-auto lg:bg-transparent
            lg:translate-x-0 lg:transition-none lg:flex lg:items-center`}
        >
            <ul className="nav-list flex flex-col lg:flex-row lg:gap-4 lg:p-0 lg:h-full lg:items-center">
                <li 
                    className="nav-list-item cursor-pointer text-[1.2rem] lg:hover:bg-[#333A45] rounded-[25px] lg:text-[1rem]" 
                    onClick={() => handleNavClick(refs.presentationRef)}>
                    Inicio
                </li>
                <li 
                    className="nav-list-item cursor-pointer text-[1.2rem] lg:hover:bg-[#333A45] rounded-[25px] lg:text-[1rem]" 
                    onClick={() => handleNavClick(refs.projectsRef)}>
                    Proyectos
                </li>
                <li 
                    className="nav-list-item cursor-pointer text-[1.2rem] lg:hover:bg-[#333A45] rounded-[25px] lg:text-[1rem]" 
                    onClick={() => handleNavClick(refs.aboutMeRef)}>
                    Sobre mí
                </li>
            </ul>
        </nav>
        </div>

    </header>
    );
}

export default HeaderComponent;
