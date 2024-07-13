import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import About from "./components/About";
import Footer from './components/Footer';
import Dummy from './components/Dummy';
import ProjectsList from './components/ProjectsList';
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Header/>
    <About/>
    <Footer/>
    <ProjectsList/>
  </React.StrictMode>,
)
