import React, { useState, useEffect } from "react";
import { faker } from '@faker-js/faker';
import Modal from "react-modal";
import './HomePage.css';

Modal.setAppElement("#root");

function HomePage() {
  const [allCats, setAllCats] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCatClick = (cat) => {
    setSelectedCat(cat);
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
            <h2>Name: {faker.name.firstName()}</h2>
            <p>Birthday: {faker.date.between('2005-01-01', '2023-04-05').toLocaleDateString()}</p>
            <p>Location: {faker.address.city(undefined, undefined, 'en_GB')}</p>
            <div className="modalImage">
              <img src={selectedCat.url} alt={selectedCat.id} />
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}

export default HomePage;
