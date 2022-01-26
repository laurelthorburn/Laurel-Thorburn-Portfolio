import { useContext } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProjectList from './components/projectList/ProjectList';
// import Toggle from './components/toggle/Toggle';
// import { ThemeContext } from './context';


const App = () => {

  return (
    <div>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  )

};

export default App;

