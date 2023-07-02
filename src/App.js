
import Navigationbar from './components/Νavigationbar';
import Footer from './components/Footer'; // Import the Footer component

import Home from "./pages/Home";
import Visualization from "./pages/visualization";
import Team from "./pages/Team";
import Dataset from "./pages/Dataset";
import References from "./pages/References";

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import './css/App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="personal_app">
          <>
            <Navigationbar />
              <Routes>
                <Route
                  exact
                  path="/dogs_breed"
                  element={
                      <Home />
                  }
                />
                <Route
                  exact
                  path="/dogs_breed/team"
                  element={
                      <Team />
                  }
                />
                  <Route
                  exact
                  path="/dogs_breed/dataset"
                  element={
                      <Dataset />
                  }
                />
                <Route
                  exact
                  path="/dogs_breed/visualization"
                  element={
                      <Visualization />
                  }
                />
            
            <Route
                  exact
                  path="/dogs_breed/references"
                  element={
                      <References />
                  }

                />
                              </Routes>
            <Footer />
          </>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
