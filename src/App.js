import Home from "./Pages/home.jsx"
import "animate.css"
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Pages/Menu.jsx'
import Checkout from "./Pages/Checkout.jsx";
import ParentCheckout from "./Pages/ParentCheckout.jsx";
import Success from "./Pages/Success.jsx";
function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>}/>
       <Route path='/checkout' element={<ParentCheckout/>}/>
       <Route path='/success' element={<Success/>}/>
      </Routes>
      </div>
  );
}

export default App;
