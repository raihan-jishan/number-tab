import Home from "./components/Home";
import "./App.css"; 
import {BrowserRouter as Router , Route ,Routes} from 'react-router-dom';
import Footer from "./components/Footer";
import Home2 from "./components/docs/home";
function App() {
  return(
    <div>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/docs/number-user-e4470374091274092" element={<Home2 />}/>
          </Routes>
        </Router>
      <Footer /> 
    </div>
  )
}

export default App;
