import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { assets } from '../assets/assets';

function MyOrders() {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(url+"/api/order/userorders", {}, {headers: {token}});
    setData(response.data.data);
  }

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token])

  return (
    <section className="w-full py-12 mt-18 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-50 p-8 sm:p-12 shadow-xl">
        <h2 className="font-extrabold text-2xl md:text-3xl mb-8 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">My Orders</h2>
        <div className="flex flex-col gap-6">
          {data.map((order, index) => (
            <div key={index} className="grid grid-cols-6 items-center gap-6 text-base py-4 px-6 text-gray-700 bg-white/80 rounded-2xl border-2 border-orange-100 shadow-md">
              <img className="w-12" src={assets.parcel_icon} alt="" />
              <p className="font-bold text-gray-800">{order.items.map((item, idx) => idx === order.items.length-1 ? item.name + " x " + item.quantity : item.name + " x " + item.quantity + ", ")}</p>
              <p className="text-orange-600 font-bold">${order.amount}.00</p>
              <p>Items: {order.items.length}</p>
              <p><span className='text-orange-400'>&#x25cf;</span> <b className='font-bold text-gray-700'>{order.status}</b></p>
              <button onClick={fetchOrders} className="border-none py-2 px-4 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 text-white font-bold shadow-md cursor-pointer hover:scale-105 transition-transform">Track Order</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyOrders