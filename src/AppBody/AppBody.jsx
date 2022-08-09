import { useEffect, useState } from "react";
import axios from "axios";
import { Products } from "../pages/Products/Products";
import apiJson from "./apiJson";
import { Loading } from "../components/Loading/Loading";

export default function AppBody({ handleAddProduct }) {
  const fruityviceApi = axios.create({
    baseURL:
      "https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  });

  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fruityviceApi
      .get("/all")
      .then((response) => {
        setFruits(response.data);
      })
      .catch((e) => {
        if (!e) {
          console.log(e);
        } else {
          setFruits(apiJson);
        }
      });
  }, []);

  return (
    <div>
      {fruits.length > 0 ? (
        <>
          <Products fruits={fruits} handleAddProduct={handleAddProduct} />
        </>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}
