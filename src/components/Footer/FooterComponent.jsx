import "./FooterComponent.css";
import githubIcon from "../../icons/Github.svg";
import mailIcon from "../../icons/Mail.svg"
import linkedinIcon from "../../icons/Linkedin.svg"

function FooterComponent() {
    return (
        <div className="footer-section w-screen h-20 bg-[#1A1D23] flex flex-row justify-center items-center">
            <div className="footer-container text-white flex flex-col md:flex-row md:w-screen md:justify-around">
                <h3>Diseñado y desarrollador por Matías Buffa</h3>
                <div className="flex flex-row justify-center items-center gap-1">
                    <a href="https://github.com/matiibuffaRC" target="__blank">
                        <img 
                        src={githubIcon}
                        alt="github" 
                        className="cursor-pointer w-5 h-5 invert"
                        />
                    </a>
                    <a href="mailto:mati01buffa@gmail.com" target="__blank">
                        <img 
                        src={mailIcon}
                        alt="Mail" 
                        className="cursor-pointer w-5 h-5 invert"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/mat%C3%ADas-buffa-b4b901358/" target="__blank">
                        <img 
                        src={linkedinIcon}
                        alt="Linkedin" 
                        className="cursor-pointer w-5 h-5 invert"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent