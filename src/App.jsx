import './App.css'
import { useRef } from 'react';
import HeaderComponent from './components/Header/HeaderComponent.jsx'
import PresentationComponent from './components/Presentation/PresentationComponent.jsx';
import ProjectsComponent from './components/Projects/ProjectsComponent.jsx';
import AboutMeComponent from './components/AboutMe/AboutMeComponent.jsx';
import FooterComponent from './components/Footer/FooterComponent.jsx';

function App() {
  const presentationRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutMeRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HeaderComponent scrollToSection={scrollToSection} refs={{presentationRef, projectsRef, aboutMeRef}}></HeaderComponent>
      <main>
        <div ref={presentationRef}>
          <PresentationComponent></PresentationComponent>
        </div>
        <div ref={projectsRef}>
          <ProjectsComponent></ProjectsComponent>
        </div>
        <div ref={aboutMeRef}>
          <AboutMeComponent></AboutMeComponent>
        </div>
        <FooterComponent></FooterComponent>
      </main>
    </div>
  )
}

export default App
