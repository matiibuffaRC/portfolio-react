import project1Image from "../assets/imgs/projectImg.jfif"
import project2Image from "../assets/imgs/projectImg2.jfif"
import project3Image from "../assets/imgs/projectImg3.jfif"

export const projects = [
    {
        id:1,
        title: "Fulbito",
        description: "Sistema para la gestión de turnos de canchas sintéticas de futbol, reserva vía online y aviso por correo.",
        technologies: ["React", "Vite", "TailwindCSS"],
        github: "https://github.com/",
        img:project1Image,
    },
    {
        id:2,
        title: "Complejo de cabañas Lo Nuestro",
        description: "Landing page para un complejo de cabañas en zona turística, con la información necesaria para realizar una reserva vía whatsapp.",
        technologies: ["React", "Vite", "TailwindCSS"],
        github: "url",
        img:project2Image,
    },
    {
        id:3,
        title: "Casa buffa",
        description: "Landing page para un negocio de descartable y repostería, cuando con un carrito virtual para enviar y recibir la cotización del mismo vía whatsapp.",
        technologies: ["React", "Vite", "TailwindCSS"],
        github: "url",
        img:project3Image,
    }
]