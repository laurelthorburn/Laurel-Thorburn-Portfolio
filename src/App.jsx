// import { useContext } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProjectList from './components/projectList/ProjectList';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'

const App = () => {

  return (

    <div>
      <Navbar />
      <Intro />
      {/* <About />
      <ProjectList />
      <Contact /> */}
      <Footer />
    </div>
  )

};

export default App;

