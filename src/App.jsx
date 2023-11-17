
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Aboutme from './pages/Aboutme'
import Contact from './pages/Contact'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/aboutme' element={<Aboutme/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
