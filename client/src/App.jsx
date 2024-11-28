
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Display from './Components/Display';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Signup" element= {<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
