import './App.css';
import NavBar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {About} from './page/About'
import {Services} from './page/Services'
import {Login} from './page/Login'
import {Home} from './page/Home'

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='about' element={<About />}/>
        <Route path='services' element={<Services />}/>
        <Route path='login' element={<Login />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
