import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"

import Home from "./pages/Home"
import Register from "./pages/Register"
import "./styles/global.css"

function App() {
  
  return (
    <BrowserRouter>
      
      <Link to="/register">Register</Link>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;