import "./AboutMeComponent.css"

function AboutMeComponent() {
    return (
        <div className="aboutMe-section w-screen h-full bg-[#21252c] to-[#1a1d23]  flex flex-col justify-center items-center">
            <div className="aboutMe-container lg:max-w-5xl">
                <h2 className='aboutMe-title text-[1rem] text-[#58C4DC] lg:text-[1.2rem]'>SOBRE MÍ</h2>
                <h3 className="aboutMe-subtitle text-white text-[1.4rem] lg:text-[1.5rem]">Matías Buffa</h3>
                <div className="aboutMe-information-container flex flex-col md:flex-row md:justify-center md:items-start">
                    <div className="aboutMe-information-personal">
                        <h3 className="aboutMe-text text-[#ddd] text-[1.1rem] lg:text-[1.3rem] text-pretty">
                            Desarrollador de software especializado en aplicaciones web Full Stack, enfocado en React y Node.js.
                        </h3>
                        <h3 className="aboutMe-text text-[#ddd] text-[1.1rem]  lg:text-[1.3rem] text-pretty">
                            Actualmente estoy estudiando Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional (UTN).
                        </h3>
                        <h3 className="aboutMe-text text-[#ddd] text-[1.1rem] lg:text-[1.3rem] text-pretty">
                            Tengo 20 años y resido en San Francisco, Córdoba, Argentina.
                        </h3>
                    </div>
                    <div className="aboutMe-information-university rounded-[20px] bg-[#1A1D23] md:w-[120%] lg:h-full lg:w-[105%]">
                        <h3 className="aboutMe-text aboutMe-information-university-title text-[1.3rem] text-white lg:text-[1.5rem]">Ingeniería en Sistemas de Información (2023 - Actualidad).</h3>
                        <h3 className="aboutMe-text text-[#ddd] text-[1.1rem] lg:text-[1.3rem]">En el cursado de la carrera desarrollé pensamiento lógico, modelado de sistemas y bases sólidas en algoritmos y estructuras de datos, trabajando con requerimientos reales.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMeComponent