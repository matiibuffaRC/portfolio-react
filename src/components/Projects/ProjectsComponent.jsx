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
            <h3 className="project-title text-[1.3rem] lg:text-[1.5rem]">
                {project.title}
            </h3>

            <h4 className="project-description text-[#ddd]">
                {project.description}
            </h4>

            <div className=" flex flex-row gap-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link bg-[#2b2e36] w-30 rounded-[15px] flex items-center justify-center gap-2 px-4 py-2 hover:bg-[#353841] transition-colors">
                    <img src={githubIcon} alt="github" className="w-5 h-5 invert" />
                    Código
                </a>

                <a href={project.url} target="__blank" className={`project-state rounded-[15px] flex flex-row items-center justify-center gap-1 ${project.estado === "Página oficial"
                    ? "bg-[#51BBD5] text-black hover:bg-[#42a8c4]"
                    : "bg-[#2b2e36]"}`}>
                    <img src={codeIcon} alt="" className={`${project.estado === "Página oficial" ? "hidden" : "block invert"}`}/>
                    {project.estado}
                </a>
            </div>

            <div className="technologies-container flex flex-wrap">
                {project.technologies.map((tech) => (
                <h5 key={tech} className="tech bg-[#2b2e36] rounded-[25px]">
                    {tech}
                </h5>
                ))}
            </div>
        </div>

        {/* FOTOS */}
        <div className="flex flex-col-reverse md:flex-row gap-2 md:w-[90%]">
            <div className="photos-options-container flex md:flex-col justify-center items-center gap-2">
                {project.imgs.map((img, imgIndex) => (
                <div key={imgIndex} onClick={() => changeImage(projectIndex, imgIndex)} className={`project-photo w-14 h-14 rounded-[10px] cursor-pointer border ${imageSelected[projectIndex] === imgIndex
                    ? "border-white"
                    : "border-[#2a2d35]"}`}>
                    <img src={img} alt="" className="w-full h-full object-cover rounded-[10px]"/>
                </div>
                ))}
            </div>

            <div className="project-photo w-full rounded-[20px] flex justify-center items-center border-3 border-[#2a2d35] shadow-2xl">
                <img src={currentImage} alt="" className="w-full object-fill rounded-[15px]"/>
            </div>
        </div>
    </div>
    );
    });

    return (
        <div className="w-full bg-[#1a1d23] flex justify-center">
            <div className="projects-section text-white lg:w-5xl">
                <h2 className="text-[#58C4DC]">PROYECTOS</h2>
                <h3 className="text-[1.4rem]">Mis proyectos destacados</h3>

                <div className="projects-container">
                    {printProjects}
                </div>
            </div>
        </div>
    );
}

export default ProjectsComponent;
