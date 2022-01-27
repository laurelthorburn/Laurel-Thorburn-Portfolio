// import { useContext } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProjectList from './components/projectList/ProjectList';
import Navbar from './components/navbar/Navbar';


const App = () => {

  return (

    <div>
      <Navbar />
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  )

};

export default App;

