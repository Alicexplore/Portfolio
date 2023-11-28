import './App.css';
import './Banner.scss'
import Banner from './pages/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import OpeningCounter from './pages/OpeningCounter';


// import MouseFollow from './pages/MouseFollow';


function App() {

  return (
    <div> 
      {/* <OpeningCounter />  */}
      <Navbar />
      <Banner />
      <Projects />
      <Contact />
      <Footer />
    </div>  
  )
}

export default App
