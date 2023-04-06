import React, { useState, useEffect } from "react";
import './Checkout.css';

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartData = localStorage.getItem("cartData");
    if (cartData) {
      const parsedData = JSON.parse(cartData);
      setCartItems(parsedData.cartItems);
      setTotalPrice(parsedData.totalPrice);
    }
  }, []);

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    const updatedTotalPrice = calculateTotalPrice(updatedCartItems);
    setCartItems(updatedCartItems);
    setTotalPrice(updatedTotalPrice);
    updateLocalStorage(updatedCartItems, updatedTotalPrice);
  };

  const updateDonation = (itemId, value) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, donation: parseInt(value) };
      }
      return item;
    });
    const updatedTotalPrice = calculateTotalPrice(updatedCartItems);
    setCartItems(updatedCartItems);
    setTotalPrice(updatedTotalPrice);
    updateLocalStorage(updatedCartItems, updatedTotalPrice);
  };

  const calculateTotalPrice = (items) => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.donation;
    });
    return totalPrice;
  };

  const updateLocalStorage = (cartItems, totalPrice) => {
    const cartData = { cartItems, totalPrice };
    localStorage.setItem("cartData", JSON.stringify(cartData));
  };

  const clearCart = () => {
    localStorage.removeItem("cartData");
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <div className="checkout-container">
      <h1>Adoption Details</h1>
      <table>
        <thead>
          <tr>
            <th>Cat Name</th>
            <th>Breed</th>
            <th>Age</th>
            <th>Donation</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.breed}</td>
              <td>{item.age}</td>
              <td>
                <input type='text' value={item.donation} onChange={(e) => updateDonation(item.id, e.target.value)} />
              </td>
              <td>
                <button onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total Price:</td>
            <td>{totalPrice}</td>
          </tr>
        </tfoot>
      </table>
      <button onClick={clearCart}>Clear Cart</button>
      <button onClick={clearCart} className='checkout'>Checkout</button>
    </div>
  );
}

export default Checkout;