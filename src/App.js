import './css/App.css';

import Home from "./pages/Home";
import Visualization from "./pages/visualization";
import Team from "./pages/Team";
import Dataset from "./pages/Dataset";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigationbar from './components/Νavigationbar';
import Footer from './components/Footer'; // Import the Footer component
import "bootstrap/dist/css/bootstrap.min.css";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="personal_app">
          <>
            <Navigationbar />
            <TransitionGroup>
              <Routes>
                <Route
                  exact
                  path="/dogs_breed/"
                  element={
                    <CSSTransition classNames="fade" timeout={300}>
                      <Home />
                    </CSSTransition>
                  }
                />
                <Route
                  exact
                  path="/dogs_breed/team"
                  element={
                    <CSSTransition classNames="fade" timeout={300}>
                      <Team />
                    </CSSTransition>
                  }
                />
                  <Route
                  exact
                  path="/dogs_breed/dataset"
                  element={
                    <CSSTransition classNames="fade" timeout={300}>
                      <Dataset />
                    </CSSTransition>
                  }
                />
                <Route
                  exact
                  path="/dogs_breed/visualization"
                  element={
                    <CSSTransition classNames="fade" timeout={300}>
                      <Visualization />
                    </CSSTransition>
                  }
                />
              </Routes>
            </TransitionGroup>
            <Footer />
          </>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
