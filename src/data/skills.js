import lenguagesImage from "../icons/Code.svg";
import FrameWorksImage from "../icons/Rocket.svg";
import toolsImage from "../icons/Tool.svg";
import TuercaImage from "../icons/tuerca.png";

export const skills = [
    {
        id: 1,
        categoryName: "Lenguajes",
        technologies: ["JavaScript", "TypeScript"],
        icon: lenguagesImage,
    },
    {
        id: 2,
        categoryName: "Frontend",
        technologies: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
        icon: FrameWorksImage,
    },
    {
        id: 3,
        categoryName: "Backend",
        technologies: ["Node.js", "Express"],
        icon: TuercaImage,
    },
    {
        id: 4,
        categoryName: "Herramientas",
        technologies: ["Git", "GitHub", "Figma", "VS Code", "Jira"],
        icon: toolsImage,
    }
]