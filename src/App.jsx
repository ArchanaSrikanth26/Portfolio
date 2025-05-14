import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {

  return (
    <>
     <Header />
     <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Education />
        <Contact />
       
     </main>
     <Footer />
    </>
    
  )

}

export default App;