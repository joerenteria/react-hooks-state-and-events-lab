import React , {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory,setSelectedCategory] = useState("All")


 function categoryHandler(event){
  setSelectedCategory(event.target.value);
  console.log(selectedCategory)
  }

  const itemsToDisplay = items.filter((item)=>{

      if(selectedCategory === "All"){
          return true;
      }
      else{
          return item.category === selectedCategory;
      }
  })


  return (
    <div className="ShoppingList">

      <div className="Filter">
        <select onChange={categoryHandler} name="filter">
          <option id="1" value="All">Filter by category</option>
          <option id="2" value="Produce">Produce</option>
          <option id="3" value="Dairy">Dairy</option>
          <option id="4" value="Dessert">Dessert</option>
        </select>
      </div>
      
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>

    </div>
  );
}

export default ShoppingList;
