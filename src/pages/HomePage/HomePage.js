import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { faker } from '@faker-js/faker';
import './HomePage.css';

Modal.setAppElement("#root");

function HomePage() {
  const [allCats, setAllCats] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCatClick = (cat) => {
    const catBreeds = ['Siamese', 'Persian', 'Sphynx', 'Bengal', 'Maine Coon', "Egyptian Mau", "Burmese", "Snowshoe", "Ocicat", "Bombay"];
    const randomBreed = catBreeds[Math.floor(Math.random() * catBreeds.length)];
    const selectedCat = {
      ...cat,
      name: faker.name.firstName(),
      age: faker.datatype.number({ min: 1, max: 20 }),
      breed: randomBreed
    };
    setSelectedCat(selectedCat);
    toggleModal();
  };
  

  const handleAddToBasket = () => {
    const updatedCartItems = [...cartItems, selectedCat];
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
    toggleModal();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=9"
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        const cats = data.map(cat => ({
          ...cat,
          name: faker.name.firstName(),
          age: faker.datatype.number({ min: 1, max: 15 })
        }));
        setAllCats(cats);
        

        console.log(data);
        setAllCats(data);
      } catch (err) {
        console.log(err);
        setErrorMessage("Data Not Found");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const cartData = localStorage.getItem("cartData");
    if (cartData) {
      const parsedData = JSON.parse(cartData);
      setCartItems(parsedData.cartItems);
    }
  }, []);

  const updateLocalStorage = (cartItems) => {
    const cartData = { cartItems };
    localStorage.setItem("cartData", JSON.stringify(cartData));
  };

  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      {allCats.map((cat, index) => {
        if (index < 9) {
          return (
            <div className="return" key={index}>
              <img
                src={cat.url}
                alt={cat.id}
                onClick={() => handleCatClick(cat)}
              />
            </div>
          );
        }
      })}
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

export default HomePage;