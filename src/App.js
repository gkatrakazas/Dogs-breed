
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
            <TransitionGroup>
              <Routes>
                <Route
                  exact
                  path="/dogs_breed"
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
            
            <Route
                  exact
                  path="/dogs_breed/references"
                  element={
                    <CSSTransition classNames="fade" timeout={300}>
                      <References />
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
