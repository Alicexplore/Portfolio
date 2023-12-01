import './App.css';
import './Banner.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Banner from './pages/Banner';
import Homs from './pages/Homs';
import MouseFollow from './pages/MouseFollow';
import Contact from './pages/Contact'


function App() {

  return (
    <div> 
      <MouseFollow />
      <Banner />
      <Homs />
      <Contact />
      {/* <Projects /> */}
      {/* <Footer /> */}
    </div>  
  )
}

export default App
