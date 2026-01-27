import "./AboutMeComponent.css";

import {skills} from "../../data/skills";


function AboutMeComponent() {
    const printSkills = skills.map((skill)=>{
        return(
            <div key={skill.id} className="skills-container">
                <h3 className="skills-title text-white text-[1.1rem]">{skill.categoryName}</h3>
                <div className="skills-technologies-container flex flex-row flex-wrap ">
                    {skill.technologies.map((technology)=>{
                        return(
                            <span key={technology} className="skillsTechnology text-white text-[.9rem] bg-[#2b2e36] rounded-[20px] flex flex-row items-center hover:bg-[#353841]">
                                <img src={skill.icon} alt="" className="invert w-4 h-4" />
                                <span className="text-[#ddd]">{technology}</span>
                            </span>
                        )
                    })}
                </div>
            </div>
        )
    })

    return (
        <div className="aboutMe-section w-screen h-full bg-[#21252c] to-[#1a1d23]  flex flex-col justify-center items-center">
            <div className="aboutMe-container lg:max-w-5xl">
                <h2 className='aboutMe-title text-[1rem] text-[#58C4DC] lg:text-[1.2rem]'>SOBRE MÍ</h2>
                <h3 className="aboutMe-subtitle text-white text-[1.4rem] lg:text-[1.5rem]">Matías Buffa</h3>
                <div className="aboutMe-information-container grid grid-cols-1  gap-2.5 md:grid-cols-2 md:grid-rows-2">

                    <div className="aboutMe-information-personal md:col-start-1 md:row-start-1">
                        
                        <h3 className="aboutMe-text text-[#ddd] text-[1.1rem] lg:text-[rem] text-pretty">
                            Desarrollador de software especializado en aplicaciones web Full Stack, enfocado en React y Node.js.
                        </h3>
                        <h3 className="aboutMe-text text-[#ddd] text-[1.1rem]  lg:text-[1.2rem] text-pretty">
                            Actualmente estoy estudiando Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional (UTN).
                        </h3>
                        <h3 className="aboutMe-text text-[#ddd] text-[1.1rem] lg:text-[1.2rem] text-pretty">
                            Tengo 20 años y resido en San Francisco, Córdoba, Argentina.
                        </h3>
                    </div>

                    <div className="aboutMe-information-university md:col-start-1 md:row-start-2">
                        <h3 className="aboutMe-text aboutMe-information-title text-[1.3rem] text-white lg:text-[1.5rem]">Ingeniería en Sistemas de Información (2023 - Actualidad).</h3>
                        <h3 className="aboutMe-text text-[#ddd] text-[1.1rem] lg:text-[1.2rem]">En el cursado de la carrera desarrollé pensamiento lógico, modelado de sistemas y bases sólidas en algoritmos y estructuras de datos, trabajando con requerimientos reales.</h3>
                    </div>

                    <div className="aboutMe-information-skills md:col-start-2 md:row-start-1 md:row-span-2 bg-[#1A1D23] rounded-[25px]">
                        <h3 className="aboutMe-text aboutMe-information-title last-title text-[1.3rem] text-white lg:text-[1.4rem]">Habilidades técnicas</h3>
                        {printSkills}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutMeComponent