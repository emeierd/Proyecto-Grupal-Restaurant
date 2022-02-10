import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [pizzas, setPizzas] = useState([]);
  const getPizzas = async (data) => {
    try {
      await axios.get("http://localhost:8000/api/pizzas", data);
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false };
    }
  };
  useEffect(() => {
    const getPizzas = async () => {
      try {
        const { data } = await axios.get("/api/pizzas");
        return { succes: true, data };
      } catch (err) {
        console.log(err);
      }
    };
    getPizzas().then(({ data }) => {
      console.log(data);
      setPizzas(data);
    });
  }, []);

  return (
    <div>
      <h3>Nuestras Pizzas</h3>
      {pizzas.map(({ _id, title, price }) => (
        <>
          <p key={_id}>{title}</p>
          <p>{price}</p>
        </>
      ))}
    </div>
  );
};

export default Menu;
