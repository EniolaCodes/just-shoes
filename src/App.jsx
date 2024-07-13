import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";

import ShoeDetail from "./Pages/ShoeDetail";
import Cart from "./Pages/Cart";
import Success from "./Pages/Success";
// import Contact from "./components/Contact";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				{/* <Route path="/contact" element={<Contact />} /> */}
				<Route path="/product/:id" element={<ShoeDetail />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/success" element={<Success />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
