import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Top from './Top';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>} />
        </Routes>
        <Top/>
      </Router>
    </div>
  );
}

export default App;
