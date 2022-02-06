import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Portfolio from './pages/portfolio/Portfolio';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
