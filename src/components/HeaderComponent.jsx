import "./ChangeThemeBtn.css"

function HeaderComponent(props) {

    return (
        <div className='header w-screen h-17.5 bg-[#23272F] text-[#dfdfdf] flex flex-row items-center justify-between'>
            <div className='header-title border border-white flex flex-row items-center justify-center gap-2 text-[20px]'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M5.536 15.536L2 12l3.536-3.536m12.928 7.072L22 12l-3.536-3.536M14 4l-4 16"/>
                </svg>
                <h3>Matías Buffa</h3>
            </div>
            <div className="menu-btns border border-white flex flex-row items-center justify-center p-2 mr-4 cursor-pointer gap-2">
                {/* <label htmlFor="open-menu">
                    <div class="change-theme-btn">
                    <button class="theme-switcher-grid"id="theme-switcher-grid"aria-label="Switch theme">
                            <div className="sun" id="sun" aria-hidden="true"></div>
                            <div className="moon-overlay" id="moon-overlay" aria-hidden="true">

                            </div>
                            <div className="cloud-ball cloud-ball-left" id="ball1" aria-hidden="true">

                            </div> 
                            <div className="cloud-ball cloud-ball-middle" id="ball2" aria-hidden="true">

                            </div> 
                            <div className="cloud-ball cloud-ball-right" id="ball3" aria-hidden="true">

                            </div> 
                            <div className="cloud-ball cloud-ball-top" id="ball4" aria-hidden="true">

                            </div> 
                            <div className="star" id="star1" aria-hidden="true">

                            </div> 
                            <div className="star" id="star2" aria-hidden="true">

                            </div> 
                            <div className="star" id="star3" aria-hidden="true">

                            </div> 
                            <div className="star" id="star4" aria-hidden="true">

                            </div>
                        </button>
                </div>
                </label> */}
                <span class="material-symbols-outlined">
                        menu
                </span>
                {/* <input type="checkbox" id="open-menu" className="hidden" onChange={changeTheme}/> */}
            </div>
        </div>
    )
}

export default HeaderComponent