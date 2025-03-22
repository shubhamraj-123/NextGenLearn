

import './App.css'
import Carousel from './components/Carousel'

import Navbar from './components/Navbar'


import { Button } from './components/ui/button'
import DarkMode from './DarkMode'
import Courses from './pages/Courses'



const slides=[
"https://i.ibb.co/ncrXc2V/1.png",
"https://i.ibb.co/B3s7v4h/2.png",
"https://i.ibb.co/XXR8kzF/3.png",
"https://i.ibb.co/yg7BSdM/4.png"
]

function App() {

  return (
<>
<Navbar></Navbar>
     
<main className='App'>
      <div className="max-w-lg">
       <Carousel>
       <img src={slides[0]} alt=""  />
       <img src={slides[1]} alt="" />
       <img src={slides[2]} alt="" />
       <img src={slides[3]} alt="" />
       </Carousel>
      
      
        
      </div>

    </main>
 
 <Courses/>
 </>
  )
}

export default App
