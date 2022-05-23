import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Shop from './components/Shop';
import StickyBar from './components/StickyBar';

// the component
function App() {
  // state
  const [cart, setCart] = useState([]);

  // render
  return (
    <BrowserRouter>
      <StickyBar cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
