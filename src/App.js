import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Contacto from "./views/Contacto";

import Navbar from "./components/Navbar";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
