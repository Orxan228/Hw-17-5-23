import {Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Card from './Pages/Card/Card'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/card" element={<Card/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
