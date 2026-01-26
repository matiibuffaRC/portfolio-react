// import React from 'react'
import './ProjectsComponent.css';
import {projects} from "../../data/projects";
import githubIcon from "../../icons/Github.svg";


function ProjectsComponent() {

    const printProjects = projects.map((project)=>{
        return(
            <div key={project.id} className={`project-container flex flex-col md:flex-row lg:flex-row ${project.id % 2 === 0 ? "" : "md:flex-row-reverse lg:flex-row-reverse"} md:items-center lg:items-center border-b-2 border-[#353841]`}>

                {/* Sección con la información de cada proyecto */}
                <div className='project-information w-full'>
                    <h3 className='project-title text-[1.2rem]'>{project.title}</h3>
                    <h4 className='project-description w-full text-[#ddd] text-[1rem] '>{project.description}</h4>
                    <a href={project.github} target='_blank' className='project-link bg-[#2b2e36] w-30 text-[1rem] rounded-[15px] flex flex-row items-center justify-center gap-2 px-4 py-2 hover:bg-[#353841] transition-colors'>
                        <img 
                            src={githubIcon}
                            alt="github" 
                            className="cursor-pointer w-5 h-5 invert"
                        />
                        Código
                    </a>
                    

                    <div className='technologies-container flex flex-wrap '>
                        {project.technologies.map((technology)=>(
                        <h5 className='tech bg-[#2b2e36] rounded-[25px] text-[1rem]' key={technology}>
                            {technology}
                        </h5>
                        ))}
                    </div>

                </div>

                {/* Sección con la foto de cada proyecto */}

                <div className='project-photo w-full lg:w-[80%] md:w-[75%] rounded-[15px] '>
                    <img src={project.img} alt="" className='w-full object-fill rounded-[15px]'/>
                </div>
            </div>
        )
    })

    return (
            <div className='w-full h-full bg-[#1a1d23] flex flex-col justify-center items-center'>
                <div className='projects-section  text-white lg:w-5xl'>
                    <div>
                        <h2 className='projects-title text-[1rem] text-[#58C4DC]'>PROYECTOS</h2>
                        <h3 className='projects-subtitle text-[1.4rem]'>Mis proyectos destacados</h3>
                    </div>
                    <div className='projects-container '>
                        {printProjects}
                    </div>
                </div>
            </div>
    )
}

export default ProjectsComponent