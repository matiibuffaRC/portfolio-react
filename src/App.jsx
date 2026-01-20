import './App.css'

import HeaderComponent from './components/HeaderComponent.jsx'

function App() {
  
  return (
    <div className={theme === "dark-theme" ? "theme-dark" : "theme-light"}>
      <HeaderComponent></HeaderComponent>

    </div>
  )
}

export default App
