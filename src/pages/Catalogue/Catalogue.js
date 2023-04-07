import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { faker } from '@faker-js/faker';

import './Catalogue.css';
import CatList from "../../components/CatList";

Modal.setAppElement("#root");

const API_KEY = "live_3ALakHwgHx64XEQsHNrVxcBR0rnbsK259Mw6jSJFwRhLzAC1vJRhXIDyazybChd9";
const LIMIT = 12;
const API_URL = `https://api.thecatapi.com/v1/images/search?limit=${LIMIT}&size=small&has_breeds=1&api_key=${API_KEY}`;

export default function Catalogue()
{
    // =================================================================
    //  STATE
    // =================================================================

    const [loading, setLoading] = useState(true);

    const [allCats, setAllCats] = useState([]);
    const [selectedCat, setSelectedCat] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    // =================================================================
    //  EVENT HANDLERS
    // =================================================================

    /**
     * Toggles the Modal that displays the selected cat information.
     */
    const toggleModal = () =>
    {
        setShowModal(!showModal);
    };

    const handleCatClick = (cat) =>
    {
        setSelectedCat(cat);
        toggleModal();
    };


    const handleAddToBasket = () =>
    {
        const updatedCartItems = [...cartItems, selectedCat];
        setCartItems(updatedCartItems);
        updateLocalStorage(updatedCartItems);
        toggleModal();
    };

    // =================================================================
    //  USE EFFECTS
    // =================================================================

    useEffect(() =>
    {
        const fetchData = async () =>
        {
            try
            {
                const response = await fetch(API_URL);
                if (!response.ok) throw new Error(response.statusText);
                const data = await response.json();
                const cats = data.map(cat => ({
                    ...cat,
                    name: faker.name.firstName(),
                    age: faker.datatype.number({ min: 1, max: 15 }),
                    breed: cat.breeds[0].name
                }));
                console.log(cats);
                setAllCats(cats);
            } catch (err)
            {
                console.log(err);
                setErrorMessage("Data Not Found");
            } finally
            {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() =>
    {
        const cartData = localStorage.getItem("cartData");
        if (cartData)
        {
            const parsedData = JSON.parse(cartData);
            setCartItems(parsedData.cartItems);
        }
    }, []);

    // =================================================================
    //  PERSISTENCE
    // =================================================================

    const updateLocalStorage = (cartItems) =>
    {
        const cartData = { cartItems };
        localStorage.setItem("cartData", JSON.stringify(cartData));
    };

    // =================================================================
    //  RENDER
    // =================================================================

    return (
        <div className="catalogue-page">
            <hr className='divider' />
            <h3 className='section-title'>
                CATALOGUE
            </h3>
            <hr className='divider' />

            {/* ASYNC PLACEHOLDER */}

            {loading && <p>Loading...</p>}

            {/* CAT LIST */}

            <div className="cat-container">
                <CatList key="index" cats={allCats} onClick={handleCatClick} />
            </div>

            {/* MODAL */}

            <Modal
                isOpen={showModal}
                onRequestClose={toggleModal}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                    content: {
                        width: "33%",
                        height: "66%",
                        margin: "auto",
                        borderRadius: "10px",
                        boxShadow: "10px 5px 15px rgba(0,0,0,0.5)",
                        backgroundSize: "cover",
                    },
                }}
            >
                <div className="closeModal">
                    <button onClick={toggleModal}>X</button>
                </div>

                {selectedCat && (
                    <>
                        <h2>{selectedCat.name}</h2>
                        <div className="modalImage">
                            <img src={selectedCat.url} alt={selectedCat.id} />
                        </div>
                        <p>Age: {selectedCat.age}</p>
                        <p>Breed: {selectedCat.breed}</p>
                        <button onClick={handleAddToBasket}>Add to Basket</button>
                    </>
                )}
            </Modal>
        </div>
    );
}