// import React from 'react'
import './ProjectsComponent.css'
import {projects} from "../../data/projects";

function ProjectsComponent() {

    const printProjects = projects.map((project)=>{
        return(
            <div key={project.id} className={`project-container flex flex-col md:flex-row lg:flex-row ${project.id % 2 === 0 ? "" : "md:flex-row-reverse lg:flex-row-reverse"} md:items-center lg:items-center border-b-2 border-[#353841]`}>

                {/* Sección con la información de cada proyecto */}
                <div className='project-information w-full'>
                    <h3 className='project-title text-[1.2rem]'>{project.title}</h3>
                    <h4 className='project-description w-full text-[#ddd] text-[1rem] '>{project.description}</h4>
                    <a href={project.github} target='_blank' className='project-link bg-[#2b2e36] text-[1rem] rounded-[15px] flex flex-row w-30 gap-2 justify-center '>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="24"
                            height="24"
                        >
                        <path d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244z"/>
                        </svg>
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