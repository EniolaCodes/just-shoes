import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import ShoeDetail from "./Pages/ShoeDetail";
import Cart from "./Pages/Cart";


const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/shoe/:id" element={<ShoeDetail />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
