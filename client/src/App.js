import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header.js';
import Terms from './components/Terms';
import Home from './components/Home.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/termsandconditions' element={<Terms/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
