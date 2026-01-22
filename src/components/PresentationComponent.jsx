import "./PresentationComponent.css"

function PresentationComponent() {
    return (
        <div className="w-screen h-full bg-linear-to-t from-[#23272F] to-[#1a1d23] flex flex-col items-center justify-center text-white">
            <div className="presentation">
                <h1 className="text-[3.5rem] text-center font-bold">Matías Buffa</h1>
                <h2 className="text-[1.4rem] text-center text-gray-200">Software Developer</h2>
                <div className="presentation-buttons flex flex-row items-center justify-center gap-4">
                    <a href="#" className="flex flex-row items-center justify-center bg-[#58C4DC] text-[#1a1d23] font-bold">
                        <span class="material-symbols-outlined">
                            download
                        </span>
                        <span>Curriculum</span>
                    </a>
                    <a href="#" className="flex flex-row items-center justify-center bg-[#58C4DC] text-[#1a1d23] font-bold gap-1">
                            <span className="material-symbols-outlined">code</span>
                            <span className=""><a href="https://github.com/matiibuffaRC" target="_blank" className="github-link">Ver github</a></span>
                    </a>
                </div>
            </div>     
        </div>
    )
}

export default PresentationComponent