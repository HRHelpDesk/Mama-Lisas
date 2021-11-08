import Home from "./Pages/home.jsx"
import "animate.css"
import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Pages/Menu.jsx'
function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>}/>
       
      </Routes>
      </div>
  );
}

export default App;
