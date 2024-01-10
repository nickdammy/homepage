// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import About from "./pages/about";
import Homepage from "./pages/homepage";

function App() {
	return (
		<Router>
            <div>
                <Navbar />
            </div>
			
			<Routes>
                <Route path="/homepage" element={<Homepage />} />
				<Route path="/about" element={<About />} />
            
			</Routes>
            
		</Router>
        
	);
}

export default App;
