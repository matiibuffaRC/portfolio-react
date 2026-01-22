import './App.css'
import { useState } from 'react'
import HeaderComponent from './components/HeaderComponent.jsx'
import PresentationComponent from './components/PresentationComponent.jsx';
import ProjectsComponent from './components/ProjectsComponent.jsx';

function App() {

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <main>
        <PresentationComponent></PresentationComponent>
        <ProjectsComponent></ProjectsComponent>
      </main>
    </div>
  )
}

export default App
