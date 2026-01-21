import './App.css'
import { useState } from 'react'
import HeaderComponent from './components/HeaderComponent.jsx'

function App() {
  const [theme, setTheme] = useState("ligth-theme");

  const changeTheme = () => {
    if(theme === "ligth-theme"){
      setTheme("dark-theme");
    }else{
      setTheme("ligth-theme");
    }
  }
  
  return (
    <div className={theme === "dark-theme" ? "dark-theme" : "ligth-theme"}>
      <HeaderComponent changeTheme={changeTheme}></HeaderComponent>

    </div>
  )
}

export default App
