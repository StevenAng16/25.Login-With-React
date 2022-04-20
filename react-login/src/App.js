import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
