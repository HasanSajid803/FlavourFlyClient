import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate()

  return (
    <section className="w-full mt-18 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-50 p-8 sm:p-12 shadow-xl">
        <div className="grid grid-cols-6 items-center text-gray-700 text-base font-semibold mb-4">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="mb-4" />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="grid grid-cols-6 items-center text-gray-700 text-base my-3">
                  <img className="w-14 rounded-xl shadow" src={url+"/images/"+item.image} alt="" />
                  <p className="font-bold">{item.name}</p>
                  <p className="text-orange-600 font-bold">${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p className="font-bold">${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cursor-pointer text-red-500 font-bold text-lg">×</p>
                </div>
                <hr className="h-[1px] bg-orange-100 border-none" />
              </div>
            );
          }
        })}
        <div className="mt-12 flex flex-col md:flex-row justify-between gap-10">
          <div className="flex-1 flex flex-col gap-6 bg-white/80 rounded-2xl p-6 shadow-md">
            <h2 className="font-extrabold text-orange-600 text-2xl mb-2 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">Cart Totals</h2>
            <div>
              <div className="flex justify-between text-gray-700 font-medium">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between text-gray-700 font-medium">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between text-gray-800 font-bold">
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 :getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button onClick={() => navigate('/order')} className="mt-4 border-none text-white font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 w-full py-3 rounded-xl shadow-md text-lg cursor-pointer hover:scale-105 transition-transform">PROCEED TO CHECKOUT</button>
          </div>
          <div className="flex-1">
            <div className="bg-white/80 rounded-2xl p-6 shadow-md">
              <p className="text-gray-600 font-medium mb-2">If you have a promo code, Enter it here</p>
              <div className="mt-2 flex justify-between items-center bg-orange-50 rounded-xl p-2">
                <input className="bg-transparent text-gray-800 border-none outline-none pl-2 flex-1" type="text" placeholder="promo code" />
                <button className="ml-2 border-none text-white font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 w-32 py-2 rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
