import './App.css'
import Hero from './pages/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Header from './components/Header';
import Contact from './pages/Contact';
import Intersection from './components/Intersection';
// import MouseFollow from './pages/MouseFollow';


function App() {

  return (
    <div> 
      {/* <MouseFollow /> */}
      <Header />
      <Hero />
      <Navbar />
      {/* <Intersection /> */}
      <About />
      {/* <Intersection /> */}
      <Projects />
      {/* <Intersection /> */}
      <Contact />
      <Intersection />
      <Footer />
    </div>
    
  )
}

export default App
