import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Pizza from "../Components/Pizza";

export default function Homepage() {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas = [], error, loading } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  console.log(pizzas);
  return (
    <div>
      <div className="row justify-content-center p-2">
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          pizzas.map((pizza) => (
            <div className="col-md-3 m-3" key={pizza._id}>
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
