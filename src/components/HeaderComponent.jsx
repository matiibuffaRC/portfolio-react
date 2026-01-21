import "./HeaderComponent.css";
import { useState, useEffect } from "react";

function HeaderComponent() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // lg

  // Detectar cambios de resolución
    useEffect(() => {
        const handleResize = () => {
        const mobile = window.innerWidth < 1024;
        setIsMobile(mobile);

      // Si pasamos a desktop, cerramos el menú
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

    return (
    <header className="header h-16.25 w-screen bg-[#23272F] flex items-center justify-between text-white fixed left-0 top-0 z-15">
        <div
            className={`fixed inset-0 bg-[rgba(0,0,0,.45)] z-10 
            ${menuOpen ? "block" : "hidden"} lg:hidden`}
            onClick={openMenu}
        />

        <div className="header-title flex flex-row items-center gap-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5 w-5 md:h-7 md:w-7 lg:h-8 lg:w-8"
            >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="square"
                strokeWidth="2"
                d="M5.536 15.536L2 12l3.536-3.536m12.928 7.072L22 12l-3.536-3.536M14 4l-4 16"
            />
        </svg>
            <h4 className="text-[1.1rem] md:text-[1.4rem] lg:text-[1.6rem]">
                MatíasBuffa
            </h4>
        </div>

        <div className="header-btns flex flex-row items-center lg:hidden">
            <span
                className="material-symbols-outlined cursor-pointer text-[1.1rem]"
            onClick={openMenu}
            >
                menu
            </span>
        </div>

        <nav
            className={`fixed top-0 left-0 z-20 h-screen w-62.5 bg-[#23272f]
            transition-transform duration-300 ease-in-out
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}
            md:w-100
            lg:static lg:h-full lg:w-auto lg:bg-transparent
            lg:translate-x-0 lg:transition-none lg:flex lg:items-center`}
        >
            <ul className="nav-list flex flex-col lg:flex-row lg:gap-4 lg:p-0 lg:h-full lg:items-center">
                <li className="nav-list-item cursor-pointer lg:hover:bg-[#333A45] rounded-[25px] lg:text-[1.2rem]" onClick={openMenu}>Inicio</li>
                <li className="nav-list-item cursor-pointer lg:hover:bg-[#333A45] rounded-[25px] lg:text-[1.2rem]" onClick={openMenu}>Experiencia</li>
                <li className="nav-list-item cursor-pointer lg:hover:bg-[#333A45] rounded-[25px] lg:text-[1.2rem]" onClick={openMenu}>Proyectos</li>
                <li className="nav-list-item cursor-pointer lg:hover:bg-[#333A45] rounded-[25px] lg:text-[1.2rem]" onClick={openMenu}>Sobre mí</li>
            </ul>
        </nav>

    </header>
    );
}

export default HeaderComponent;
