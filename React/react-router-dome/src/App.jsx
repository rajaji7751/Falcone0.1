
import './App.css'
import { BrowserRouter,Routes, Route,Link } from 'react-router-dom'
import { Home } from './components/Home'
import { Contact } from './components/Contact'
import { About } from './components/About'


function App() {
  

  return (
    <>
      
     <BrowserRouter>
     <div className="App">
      <nav className='bg-white p-4'>
        <ul className='flex justify-around'></ul>
        <li>
          <link to="/" className="text-black hover:text-gray-200"></link>






          
        </li>
      </nav>

     </div>

<nav>
  <ul>
  <li>
    <Link to='/'>Home</Link>
    
  </li>
  <li>
  <Link to='/about'>About</Link>
  </li>
  <li>
  <Link to='/contact'>Contact</Link>
  </li>
  </ul>
  
</nav>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>

     </BrowserRouter>

    </>
  )
}

export default App
