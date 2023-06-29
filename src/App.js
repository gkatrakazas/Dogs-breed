import './css/App.css';

import Home from "./pages/Home";
import Visualization from "./pages/visualization";
import Team from "./pages/Team";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigationbar from './components/Νavigationbar';
import Footer from './components/Footer'; // Import the Footer component
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="personal_app">
          <>
            <Navigationbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/team" element={<Team />} />
              <Route exact path="/visualization" element={<Visualization />} />
            </Routes>
            <Footer /> {/* Include the Footer component */}
          </>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
