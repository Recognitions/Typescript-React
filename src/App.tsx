import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import {Header} from "./components/Header"
import {Home} from "./pages/Home"
import {Register} from "./pages/Register"
import {Complete} from "./pages/Complete"
import {Edit} from "./pages/Edit"
import "./styles/global.css"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="pedidos-entregues" element={<Complete/>}/>
        <Route path="editar-pedido/:id" element={<Edit/>}/>
        <Route path="cadastrar-pedidos" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;