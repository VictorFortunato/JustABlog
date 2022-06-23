import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

//pages
function App() {
  return (
    <div className="App">

        <BrowserRouter>
        <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}> </Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path="/login" element={<Login />}> </Route>
              <Route path='/register' element={<Register/>}></Route>
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
