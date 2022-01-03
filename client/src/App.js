import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './views/NotFound';
import Register from './views/Register';
import Home from './views/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
