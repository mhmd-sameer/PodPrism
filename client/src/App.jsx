import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Signup from './Components/Signup';
import Login from './Components/Login';
import DisplayAlbum from './Components/DisplayAlbum';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/album/:id' element={<DisplayAlbum />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
