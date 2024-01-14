import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Landing from "./components/Landing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>  
  );
};

export default App;
