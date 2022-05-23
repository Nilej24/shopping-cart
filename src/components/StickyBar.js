import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';

function StickyBar({ cart }) {
  //state
  const [total, setTotal] = useState(0);

  // lifecycle
  useEffect(() => {
    const newTotal = cart.reduce((runningTotal, item) => runningTotal + item.price, 0);
    setTotal(newTotal);
  }, [cart]);

  return (
    <header className="StickyBar">
      <h1>something logo something fortnite</h1>
      <ul>
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="/shop">
          <li>shop</li>
        </Link>
      </ul>
      <div className="view-cart">
        <div className="left">
          <FaShoppingCart />
          <div>
            {cart.length}
          </div>
        </div>
        <div className="right">
          <h3>your cart</h3>
          <div>total: {total}</div>
        </div>
      </div>
    </header>
  );
}

export default StickyBar;
