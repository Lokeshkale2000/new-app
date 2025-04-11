
import './App.css'
import Mainpage from './components/Mainpage'
import Mainpage2 from './components/Mainpage2'
import Navbar from './components/Navbar'

function App() {
  
  // config driven ui

  return (
    <>
      {Navbar()}
      <Mainpage></Mainpage>
      <Mainpage2></Mainpage2>
 
    </>
  )
}

export default App
