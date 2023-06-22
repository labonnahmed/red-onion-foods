import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Lunch from './components/Home/Lunch/Lunch';
import Dinner from './components/Home/Dinner/Dinner';
import Breakfast from './components/Home/Breakfast/Breakfast';
import Authentication from './components/Authentication/Authentication';
import FoodDetails from './components/Home/FoodDetails/FoodDetails'
import { createContext, useState } from 'react';
import CheckOut from './components/Home/CheckOut/CheckOut';

export const redOnion = createContext();

function App() {
  const [cart, setCart] = useState({});


  return (
    <redOnion.Provider value={[cart, setCart]}>
      <Router>
        <Routes>
          <Route path='/*' element={<Home />}>
            <Route path='breakfast' element={<Breakfast />} />
            <Route index element={<Lunch />} />
            <Route path='dinner' element={<Dinner />} />
            <Route path='breakfast/:title' element={<FoodDetails />} />
            <Route path='lunch/:title' element={<FoodDetails />} />
            <Route path='dinner/:title' element={<FoodDetails />} />
            <Route path='checkOut' element={<CheckOut />} />
          </Route>
          <Route path='/login' element={<Authentication />} />
        </Routes>
      </Router>
    </redOnion.Provider>
  );
}

export default App;
