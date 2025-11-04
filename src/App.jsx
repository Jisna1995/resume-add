import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './Pages/Landingpage'
import History from './Pages/History'
import Pagenotfound from './Pages/Pagenotfound'
import Resumegenerator from './Pages/Resumegenerator'
import Form from './Pages/Form'
 
function App() {
  

  return (
    <>
       <Header/>
         <Routes>
            <Route path='/' element={<Landingpage/>} />
            <Route path='/History' element={<History/>} />
            <Route path='/Resume' element={<Resumegenerator/>} />
            <Route path='/form' element={<Form/>} />
            <Route path='/*' element={<Pagenotfound/>} />
         </Routes>
      <Footer/>
    </>
  )
}

export default App