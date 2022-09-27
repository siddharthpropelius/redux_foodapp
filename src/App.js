import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
