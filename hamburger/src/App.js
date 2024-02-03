import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import SpecificPizza from './screens/SpecificPizza';
import Cart from './screens/Cart';
import Desert from './screens/Desert';
import Search from './screens/Search';
import SpecificDesert from './screens/SpecificDesert';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specific/:id" element={<SpecificPizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/desert" element={<Desert />} />
        <Route path="/search/:searchTerm" element={<Search/>}/>
        <Route path="/specificdesert/:id" element={<SpecificDesert/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
