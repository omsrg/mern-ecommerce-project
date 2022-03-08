import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import { useState } from 'react';

function App() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<Router>
			<Navbar toggleClick={setIsOpen} />
			<SideDrawer show={isOpen} />
			<Backdrop show={isOpen} />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/product/:id' element={<ProductDetail />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
