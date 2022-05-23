import { useEffect, useState } from 'react';

import Item from './Item';

function Shop() {
  // state
  const [shop, setShop] = useState([]);

  // lifecycle
  useEffect(() => {
    fetchShopItems();
  }, []);

  // functions
  const fetchShopItems = async () => {
    const response = await fetch("https://fortnite-api.com/v2/shop/br");
    const data = await response.json();
    const dataEntries = data.data.featured.entries;

    let currentShop = dataEntries.map((entry) => entry.items[0]);

    // get prices
    const prices = dataEntries.map((entry) => entry.regularPrice);

    // add prices to shop items because they weren't already there for some reason
    currentShop = currentShop.map((item, index) => ({...item, price: prices[index]}) );
    setShop(currentShop);
  };

  // render
  return (
    <ul className="Shop">
      {shop.map((item, index) => (
        <li key={item.id}>
          <Item dataItem={item} />
        </li>
      ))}
    </ul>
  );
}

export default Shop;
