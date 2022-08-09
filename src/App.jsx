import AppBody from "./AppBody/AppBody.jsx";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart/Cart";
import { useState } from "react";

function App() {
  const [carItems, setCarItems] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = carItems.find((item) => item.id === product.id);
    if (productExist) {
      setCarItems(
        carItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCarItems([...carItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = carItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCarItems(carItems.filter((item) => item.id !== product.id));
    } else {
      setCarItems(
        carItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClean = () => {
    setCarItems([]);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar carItems={carItems} />

        <Routes>
          <Route
            path="/"
            element={<AppBody handleAddProduct={handleAddProduct} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                carItems={carItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleCartClean={handleCartClean}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
