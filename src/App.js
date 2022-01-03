import Home from "./Pages/FrontEnd//home.jsx"
import "animate.css"
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Pages/FrontEnd//Menu.jsx'
import Admin from "./Pages/Admin/Admin.jsx";
import ParentCheckout from "./Pages/FrontEnd/ParentCheckout.jsx";
import Success from "./Pages/FrontEnd/Success.jsx";
import SuccessDelivery from "./Pages/FrontEnd/SuccessDelivery.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>}/>
       <Route path='/checkout' element={<ParentCheckout/>}/>
       <Route path='/success' element={<Success/>}/>
       <Route path='/deliverysuccess' element={<SuccessDelivery/>}/>
       <Route path='/admin/*' element={<Admin/>}/>
      </Routes>
      </div>
  );
}

export default App;
