import React , {useState} from "react";


function Item({ name, category }) {

  const [inCart,setInCart] = useState(true);

  function cartHandler(){
    setInCart((inCart)=>!inCart)
  }

  return (
    <li className={!inCart?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartHandler} className="add">{inCart?"Add to Cart":"Remove"}</button>
    </li>
  );
}

export default Item;
