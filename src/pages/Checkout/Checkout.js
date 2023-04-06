import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import './Checkout.css';

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);

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
        return { ...item, donation: parseFloat(value) || 0 };
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
      if (typeof item.donation === 'number') {
        totalPrice += item.donation;
      }
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
            <th>Age</th>
            <th>Breed</th>
            <th className="donation-header">Donation</th>
          </tr>
        </thead>
        <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.breed}</td>
            <td>
              <input type='number' value={item.donation || 0} onChange={(e) => updateDonation(item.id, e.target.value)} onFocus={(e) => e.target.select()}/>
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
          <td colSpan="5">
            <button onClick={clearCart}>Clear Cart</button>
          </td>

          </tr>
        </tfoot>
      </table>
          <p className="price-checkout">Total Price:  £{totalPrice}</p>
          <button onClick={() => cartItems.length > 0 ? setShowModal(true) : alert('Your cart is empty')} className='checkout'>Checkout</button>
          <Modal isOpen={showModal} onRequestClose={() => { setShowModal(false); clearCart(); }} 
          className='modal'
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}}>
            <button onClick={() => { setShowModal(false); clearCart(); }}>X</button>
            <h2>Thanks for adopting!</h2>
            <img src="https://i.giphy.com/media/MDJ9IbxxvDUQM/giphy.webp" alt="cat-hug"/>
          </Modal>
    </div>
  );
}

export default Checkout;