import './App.css';
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import Products from "./Components/Products";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">

      <Navbar/>

        <Routes>
            <Route path={"/products"} element={<Products/>}/>
            <Route path={"/about-us"} element={<AboutUs/>}/>
            <Route path={"/contact"} element={<Contact/>}/>
        </Routes>

    </div>
  );
}

export default App;
