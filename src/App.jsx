// import { useContext } from 'react';
// import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
// import ProjectList from './components/projectList/ProjectList';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'

const App = () => {

  return (

    <div>
      <Navbar />
      <Intro />
      {/* 
      <ProjectList />
      <Contact /> */}
      <Footer />
    </div>
  )

};

export default App;

