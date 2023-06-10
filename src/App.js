import logo from './logo.svg';

import './css/App.css';

import Home from "./pages/Home";
// import Datavisualization from "./pages/Datavisualization";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigationbar from './components/Νavigationbar'
import "bootstrap/dist/css/bootstrap.min.css";
// import References from './pages/References';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="personal_app">
            <>
              <Navigationbar/>
              <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route exact path="/personal_page/data_visualization/" element={<Datavisualization />} />
                <Route exact path="/personal_page/references/" element={<References />} /> */}

              </Routes>
            </>

        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
