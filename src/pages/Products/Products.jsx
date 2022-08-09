import "./Products.css";
import React, { useState } from "react";
import { AddCart, ButtonClose, Info } from "../../assets/icons/icons";
import Modal from "react-modal";

export const Products = ({ fruits, handleAddProduct }) => {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState([]);
  const [infoNutri, setInfoNutri] = useState([]);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const transInfo = (props) => {
    setInfo(props);
    setInfoNutri(props.nutritions);
    openModal();
  };
  
  return (
    <>
      <div className="card">
        {fruits.map((fruit) => {
          return (
            <div key={fruit.id} className="cardList">
              <div>
                <img src={`/img/${fruit.name}.png`} className="productImg" />
              </div>
              <h4 className="productName">{fruit.name}</h4>
              <h4 className="productPrice">$ {fruit.id}</h4>
              <div>
                <button
                  className="addButton"
                  onClick={() => handleAddProduct(fruit)}
                >
                  <AddCart />
                </button>
                <button
                  className="addButton"
                  onClick={() => transInfo(fruit, fruit.nutritions)}
                >
                  <Info />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        className="modalContent"
        ariaHideApp={false}
      >
        <div>
          <ul className="infoList">
            <li>Gênero: {info.genus}</li>
            <li>Família: {info.family}</li>
            <li>Ordem: {info.order}</li>
            <hr />
            <li>Carboidratos: {infoNutri.carbohydrates}gr</li>
            <li>Proteína: {infoNutri.protein}gr</li>
            <li>Gordura: {infoNutri.fat}gr</li>
            <li>Calorias: {infoNutri.calories}gr</li>
            <li>Açúcar: {infoNutri.sugar}gr</li>
          </ul>
        </div>

        <button onClick={closeModal} className="addButton">
          <ButtonClose />
        </button>
      </Modal>
      ;
    </>
  );
};
