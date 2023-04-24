import React from "react";

// Destructure the onUpdateItem prop
function Item({ item, onUpdateItem, onDeleteItem }) {
    // Add function to handle button click
    function handleAddToCartClick() {
    // Call onUpdateItem, passing the data returned from the fetch request
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInCart: !item.isInCart,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => onUpdateItem(updatedItem));
  }
      // console.log("clicked item:", item);   
    
//How to patch request

  //handleDelete
  function handleDeleteClick() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(item));
  }
  


  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button 
          className={item.isInCart ? "remove" : "add"}
          onClick={handleAddToCartClick}   
          >
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteClick}>
        Delete
        </button>
    </li>
  );
}

export default Item;
