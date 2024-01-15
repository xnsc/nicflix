import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import Recommendations from "./components/Recommendations";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/browse" element={<Recommendations />} />
			</Routes>
		</Router>
	);
};

export default App;
