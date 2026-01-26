import "./PresentationComponent.css";
import downloadIcon from "../../icons/Download.svg";
import githubIcon from "../../icons/Github.svg";

function PresentationComponent() {
    return (
        <div className="presentation-container w-screen h-full bg-linear-to-t from-[#23272F] to-[#1a1d23] flex flex-col items-center justify-center text-white">
            <div className="presentation">
                <h1 className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] text-center font-bold">Matías Buffa</h1>
                <h2 className="text-[1.3rem] sm:text-[1.4rem] md:text-[2rem] text-center text-gray-200">Software Developer</h2>
                <div className="presentation-buttons flex flex-row items-center justify-center gap-4">
                    <a href="#" className="flex flex-row items-center justify-center gap-2 px-6 py-3 bg-[#58C4DC] text-[#1a1d23] font-bold rounded-lg hover:bg-[#42a8c4] transition-colors">
                        <img 
                            src={downloadIcon}
                            alt="Download" 
                            className="cursor-pointer w-5 h-5"
                        />
                        <span>Curriculum</span>
                    </a>
                    <a href="#" className="flex flex-row items-center justify-center gap-2 px-6 py-3 bg-[#58C4DC] text-[#1a1d23] font-bold rounded-lg hover:bg-[#42a8c4] transition-colors">
                        <img 
                            src={githubIcon}
                            alt="github" 
                            className="cursor-pointer w-5 h-5"
                        />
                        <span>Github</span>
                    </a>
                </div>
            </div>     
        </div>
    )
}

export default PresentationComponent