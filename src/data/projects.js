import project1Image from "../assets/imgs/projectImg.jfif"

import project2Image1 from "../assets/imgs/project2-img1.png"
import project2Image2 from "../assets/imgs/project2-img2.png"
import project2Image3 from "../assets/imgs/project2-img3.png"
import project2Image4 from "../assets/imgs/project2-img4.png"

import project3Image1 from "../assets/imgs/project3-img1.jpeg"
import project3Image2 from "../assets/imgs/project3-img2.jpeg"
import project3Image3 from "../assets/imgs/project3-img3.jpeg"
import project3Image4 from "../assets/imgs/project3-img4.jpeg"

export const projects = [
    {
        id:1,
        title: "Complejo de cabañas Lo Nuestro",
        description: "Landing page para un complejo de cabañas en zona turística, con la información necesaria para realizar una reserva vía whatsapp.",
        technologies: ["React","TailwindCSS"],
        github: "https://github.com/matiibuffaRC/cabanias-lo-nuestro",
        estado: "Página oficial",
        url: "https://lonuestro.vercel.app/",
        cover:project2Image1,
        imgs:[project2Image2, project2Image3,project2Image4]
    },
    {
        id:2,
        title: "Casa buffa",
        description: "E-commerce para un negocio de descartable y repostería, con un carrito virtual para enviar y recibir la cotización del mismo vía whatsapp.",
        technologies: ["React", "TypeScript", "TailwindCSS"],
        estado: "En desarrollo",
        github: "url",
        cover:project3Image1,
        imgs:[project3Image2, project3Image3,project3Image4]
    }
]