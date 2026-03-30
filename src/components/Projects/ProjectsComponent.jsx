import { useState } from "react";
import "./ProjectsComponent.css";
import { projects } from "../../data/projects";
import githubIcon from "../../icons/Github.svg";
import codeIcon from "../../icons/Code.svg";

function ProjectsComponent() {

    const [imageSelected, setImageSelected] = useState(
        projects.map(() => null)
    );

    const changeImage = (projectIndex, imageIndex) => {
        setImageSelected(prev => {
        const copy = [...prev];
        copy[projectIndex] = imageIndex;
        return copy;
        });
    };

    const printProjects = projects.map((project, projectIndex) => {
        const currentImage =
            imageSelected[projectIndex] === null
            ? project.cover
            : project.imgs[imageSelected[projectIndex]];

        return (
        <div key={project.id} className={`project-container flex flex-col md:flex-row ${project.id % 2 === 0 ? "" : "md:flex-row-reverse"} md:items-center border-b-2 border-[#353841] gap-2`}>

        <div className="project-information w-full">
            <h3 className="project-title text-[1.3rem] lg:text-[1.5rem] font-bold">
                {project.title}
            </h3>

            <h4 className="project-description text-[#ddd] text-[1rem] md:text-[.8rem] lg:text-[1rem]">
                {project.description}
            </h4>

            <div className=" flex flex-row gap-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link text-[1rem] md:text-[.8rem] lg:text-[1rem] bg-[#2b2e36] w-30 rounded-[15px] flex items-center justify-center gap-2 px-4 py-2 hover:bg-[#353841] transition-colors">
                    <img src={githubIcon} alt="github" className="h-4 w-4 lg:w-5 lg:h-5 invert" />
                    Código
                </a>

                <a href={project.url} target="__blank" className={`project-state rounded-[15px] text-[1rem] md:text-[.8rem] lg:text-[1rem] flex flex-row items-center justify-center gap-1 ${project.estado === "Página oficial"
                    ? "bg-[#51BBD5] text-black hover:bg-[#42a8c4]"
                    : "bg-[#2b2e36] hover:bg-[#353841]"}`}>
                    <img src={codeIcon} alt="" className={`h-4 w-4 lg:w-5 lg:h-5 ${project.estado === "Página oficial" ? "hidden" : "block invert"}`}/>
                    {project.estado === "En desarrollo" ? "Visitar demo" : "Página Oficial"}
                </a>
            </div>

            <div className="technologies-container flex flex-wrap">
                {project.technologies.map((tech) => (
                <h5 key={tech} className="tech select-none  bg-[#2b2e36] text-[1rem] md:text-[.8rem] lg:text-[1rem] rounded-[25px] hover:bg-[#353841]">
                    {tech}
                </h5>
                ))}
            </div>
        </div>

        {/* FOTOS */}
        <div className="photos-container flex flex-col-reverse md:flex-row gap-2 md:w-[120%]">
            <div className="photos-options-container flex md:flex-col justify-center items-center gap-2">
                {project.imgs.map((img, imgIndex) => (
                <div key={imgIndex} onClick={() => changeImage(projectIndex, imgIndex)} className={`project-photo overflow-hidden w-14 h-14 border-2 hover:border-[#aaa] rounded-[15px] cursor-pointer ${imageSelected[projectIndex] === imgIndex
                    ? "border-white"
                    : "border-[#2a2d35]"}`}>
                    <img src={img} alt="" className="w-full h-full object-cover"/>
                </div>
                ))}
            </div>

            <div className="project-photo w-full rounded-[20px] flex justify-center items-center border-3 border-[#2a2d35] shadow-2xl">
                <img src={currentImage} alt="" className="w-full h-full object-cover"/>
            </div>
        </div>
    </div>
    );
    });

    return (
        <div className="w-full bg-[#1a1d23] flex justify-center">
            <div className="projects-section text-white lg:w-5xl">
                <h2 className="text-[#58C4DC] text-[1.3rem] md:text-[1.5rem] font-bold section-title">PROYECTOS</h2>
                <h3 className="text-[1.5rem] md:text-[1.6rem] font-bold section-title">Mis proyectos destacados</h3>

                <div className="projects-container">
                    {printProjects}
                </div>
            </div>
        </div>
    );
}

export default ProjectsComponent;
