import './App.scss';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/navBar';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles from "./utils/particles";

function App() {
  const location = useLocation();
  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* Particles background */}
      {renderParticleJsInHomePage && <Particles id="tsparticles" options={particles} init={handleInit} />}

      {/* Navbar overlay (above particles) */}
      <Navbar />

      {/* Content with top padding to avoid overlap */}
      <div className="content App__main-page-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
