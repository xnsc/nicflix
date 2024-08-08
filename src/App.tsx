import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import Recommendations from "./components/Recommendations";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/nicflix" element={<Landing />} />
				<Route path="/nicflix/portfolio" element={<Portfolio />} />
				<Route path="/nicflix/browse" element={<Recommendations />} />
			</Routes>
		</Router>
	);
};

export default App;
