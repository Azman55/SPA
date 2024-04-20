import React from "react";
import Galaxy from "../Images/Galaxy.jpg";
import Redmi from "../Images/Redmi.jpg";
import Vivo from "../Images/Vivo.png";
import { useDispatch } from "react-redux";

function List() {
  const dispatch = useDispatch();
  const phones = [
    {
      id: 1,
      name: "Galaxy",
      price: 14500,
      image: Galaxy,
      count: 1,
    },
    {
      id: 2,
      name: "Redmi",
      price: 10500,
      image: Redmi,
      count: 1,
    },
    {
      id: 3,
      name: "Vivo",
      price: 8500,
      image: Vivo,
      count: 1,
    },
  ];
  return (
    <div className="flex flex-wrap justify-center my-10 p-2">
      {phones.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4"
          >
            <div className="border-2 border-stone-600 rounded-3xl p-3">
              <img className="w-full" src={item.image} alt={item.name} />
              <p className="my-2 text-xl text-center font-bold">{item.name}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg">Price(BDT): {item.price}</p>
                <button
                  className="bg-slate-600 hover:bg-stone-700 text-white px-4 py-2 rounded-2xl"
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: item,
                    })
                  }
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;