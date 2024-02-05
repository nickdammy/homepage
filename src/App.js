
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";

import {
	
	Routes,
	Route,
	//HashRouter,
} from "react-router-dom";

import About from "./pages/about";
import Homepage from "./pages/homepage";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Footer from "./components/Footer";

function App() {
	return (
		
            <div>
                <Navbar />
            
			
			<Routes>
                <Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact/>} />
				<Route path="/experience" element={<Experience/>} />
			</Routes>
            
			<Footer />
			</div>
        
	);
}

export default App;
