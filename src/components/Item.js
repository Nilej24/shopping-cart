function Item({ dataItem }) {
  const { name, price } = dataItem;

  return (
    <div>
      {/* gonna change 'smallIcon' to 'featured' when i can be asked to resize stuff*/}
      <img src={dataItem.images.smallIcon} alt="" />
      <h3>{name}</h3>
      <p>
        <img src="https://image.fnbr.co/price/icon_vbucks_50x.png" alt="" className="vbucks-icon"/>
        {price}
      </p>
    </div>
  );
}

export default Item;
