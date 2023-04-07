import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import './Checkout.css';

function Checkout()
{
    // =================================================================
    //  STATE
    // =================================================================

    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState(false);

    // =================================================================
    //  USE EFFECTS
    // =================================================================

    useEffect(() =>
    {
        const cartData = localStorage.getItem("cartData");
        if (cartData)
        {
            const parsedData = JSON.parse(cartData);
            setCartItems(parsedData.cartItems);
            setTotalPrice(parsedData.totalPrice);
        }
    }, []);
    
    // =================================================================
    //  OPERATIONS
    // =================================================================

    const removeItem = (itemId) =>
    {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        const updatedTotalPrice = calculateTotalPrice(updatedCartItems);
        setCartItems(updatedCartItems);
        setTotalPrice(updatedTotalPrice);
        updateLocalStorage(updatedCartItems, updatedTotalPrice);
    };

    const updateDonation = (itemId, value) =>
    {
        const updatedCartItems = cartItems.map((item) =>
        {
            if (item.id === itemId)
            {
                return { ...item, donation: parseFloat(value) || 0 };
            }
            return item;
        });
        const updatedTotalPrice = calculateTotalPrice(updatedCartItems);
        setCartItems(updatedCartItems);
        setTotalPrice(updatedTotalPrice);
        updateLocalStorage(updatedCartItems, updatedTotalPrice);
    };

    const calculateTotalPrice = (items) =>
    {
        let totalPrice = 0;
        items.forEach((item) =>
        {
            if (typeof item.donation === 'number')
            {
                totalPrice += item.donation;
            }
        });
        return totalPrice;
    };
    
    // =================================================================
    //  PERSISTENCE
    // =================================================================

    const updateLocalStorage = (cartItems, totalPrice) =>
    {
        const cartData = { cartItems, totalPrice };
        localStorage.setItem("cartData", JSON.stringify(cartData));
    };

    const clearCart = () =>
    {
        localStorage.removeItem("cartData");
        setCartItems([]);
        setTotalPrice(0);
    };
    
    // =================================================================
    //  RENDER
    // =================================================================

    return (
        <div className="checkout-container">
        <hr className='divider' />
        <h3 className='section-title'>
            ADOPTION DETAILS
        </h3>
        <hr className='divider' />
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
                                <input type='number' value={item.donation || 0} onChange={(e) => updateDonation(item.id, e.target.value)} onFocus={(e) => e.target.select()} />
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
                    }
                }}>
                <button onClick={() => { setShowModal(false); clearCart(); }}>X</button>
                <h2>Thanks for adopting!</h2>
                <img src="https://i.giphy.com/media/MDJ9IbxxvDUQM/giphy.webp" alt="cat-hug" />
            </Modal>
        </div>
    );
}

export default Checkout;