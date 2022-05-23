import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

function Item({ dataItem, addToCart }) {
  // state
  const [currentAmount, setCurrentAmount] = useState(1);
  const [buying, setBuying] = useState(false);

  // functions
  const onSubmit = (ev) => {
    ev.preventDefault();

    addToCart(dataItem, currentAmount);
    setCurrentAmount(1);
  };

  const { name, price } = dataItem;

  // render
  return (
    <div>
      {/* gonna change 'smallIcon' to 'featured' when i can be asked to resize stuff*/}
      <img src={dataItem.images.smallIcon} alt="" />
      <h3>{name}</h3>
      <p>
        <img
          src="https://image.fnbr.co/price/icon_vbucks_50x.png"
          alt=""
          className="vbucks-icon"
        />
        {price}
      </p>
      <div className="buy">
        <button onClick={() => setBuying(!buying)}>{buying ? "done" : "buy"}</button>
        {buying && (
          <form onSubmit={onSubmit}>
            <div className="input-group">
              <label>
                amount
                <input
                  type="number"
                  min="1"
                  value={currentAmount}
                  onChange={(ev) => setCurrentAmount(+ev.target.value)}
                />
              </label>
            </div>
            <div className="increment">
              <button
                type="button"
                onClick={() => setCurrentAmount(currentAmount + 1)}
              >
                <FaAngleUp />
              </button>
              <button
                type="button"
                onClick={() =>
                  setCurrentAmount(
                    currentAmount > 1 ? currentAmount - 1 : currentAmount
                  )
                }
              >
                <FaAngleDown />
              </button>
            </div>
            <input type="submit" value="add to cart" />
          </form>
        )}
      </div>
    </div>
  );
}

export default Item;
