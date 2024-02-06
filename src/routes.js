import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Containers/Home";
import Services from "./Containers/petServices";
import Products from "./Containers/Products";
import Contact from "./Containers/Contact";

function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/"         element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact"  element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default MyRoutes;