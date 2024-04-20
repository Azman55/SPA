import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Cart() {
  const { phones } = useSelector((state) => state.cart);
  const [phoneData, setPhoneData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setPhoneData(phones);
  }, [phones]);

  useEffect(() => {
    calculateTotal();
  }, [phoneData]); // Recalculate total when phoneData changes

  function plusClickHandler(id) {
    const newPhoneData = phoneData.map((phone) => {
      if (phone.id === id) {
        return {
          ...phone,
          count: phone.count + 1,
        };
      }
      return phone;
    });
    setPhoneData(newPhoneData); // Update phoneData after increasing count
  }

  function minusClickHandler(id) {
    const newPhoneData = phoneData.map((phone) => {
      if (phone.id === id && phone.count > 0) {
        return {
          ...phone,
          count: phone.count - 1,
        };
      }
      return phone;
    });
    setPhoneData(newPhoneData); // Update phoneData after decreasing count
  }

  function calculateTotal() {
    let totalAmount = 0;
    for (let i = 0; i < phoneData.length; i++) {
      totalAmount += phoneData[i].price * phoneData[i].count;
    }
    setTotal(totalAmount);
  }

  return (
    <div className="w-full md:w-2/3 mx-auto my-auto">
      <h1 className="text-2xl text-center font-bold text-slate-600 p-5 m-5 ">
        Phone Purchase Cart :
      </h1>
      {phoneData.map((phone) => {
        return (
          <div key={phone.id} className="px-4">
            <div className="flex flex-col p-2 my-3 mx-auto sm:max-w-sm">
              <h2 className="font-bold text-xl text-sky-700 mb-1">
                {phone.name}
              </h2>
              <div className="flex justify-between items-center">
                <h3 className="text-md text-indigo-500 font-bold">
                  Price(BDT) : {phone.price}
                </h3>
                <div className="flex items-center gap-3">
                  <button
                    className="border-2 hover:bg-green-700 px-2 py-1 rounded-md"
                    onClick={() => plusClickHandler(phone.id)}
                  >
                    +
                  </button>
                  <h1 className="text-xl font-bold">{phone.count}</h1>
                  <button
                    className="border-2 hover:bg-red-700 px-2 py-1 rounded-md"
                    onClick={() => minusClickHandler(phone.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
            <hr className="my-2" />
            <div className="text-center">
              <h1>Total : {phone.price * phone.count}</h1>
            </div>
          </div>
        );
      })}
      <div className="text-center">
        <h1 className="text-2xl text-stone-700 font-bold">
          Total Amount : {total}
        </h1>
        <hr className="my-5" />
      </div>
    </div>
  );
}

export default Cart;


