import './App.css'
// import { useState } from 'react'
import HeaderComponent from './components/Header/HeaderComponent.jsx'
import PresentationComponent from './components/Presentation/PresentationComponent.jsx';
import ProjectsComponent from './components/Projects/ProjectsComponent.jsx';
import AboutMeComponent from './components/AboutMe/AboutMeComponent.jsx';

function App() {

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <main>
        <PresentationComponent></PresentationComponent>
        <ProjectsComponent></ProjectsComponent>
        <AboutMeComponent></AboutMeComponent>
      </main>
    </div>
  )
}

export default App
