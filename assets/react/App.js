import React, {useState} from "react";
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Background from "./components/Background";


const App = () => {
    const [activeSection, setActiveSection] = useState('Skills');

    return (
        <div className="app">
            <Background />
            <Navbar setActiveSection={setActiveSection} />
            {activeSection === 'Skills' && <Skills />}
            {activeSection === 'Projects' && <Projects />}
            {activeSection === 'About' && <About />}
            {activeSection === 'Contact' && <Contact />}
        </div>
    );
};

export default App;