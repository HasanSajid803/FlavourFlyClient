import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function PlaceOrder() {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]: value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = []; 
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount()+2,
    }
    let response = await axios.post(url+"/api/order/place", orderData, {headers: {token}});
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
    }
    else {
      alert("Error");
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart')
    }
    else if(getTotalCartAmount() === 0){
      navigate('/cart')
    }
  }, [token])

  return (
    <section className="w-full py-12 mt-18 px-4 sm:px-6 lg:px-8">
      <form onSubmit={placeOrder} className='max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-50 p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-start justify-between gap-10'>
        <div className='w-full max-w-[max(30%,500px)]'>
          <p className='text-2xl md:text-3xl font-extrabold mb-8 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent'>Delivery Information</p>
          <div className='flex gap-3'>
            <input required className='mb-4 w-full p-3 border border-orange-200 rounded-lg outline-orange-400 bg-white/80 font-medium' name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name'/>
            <input required className='mb-4 w-full p-3 border border-orange-200 rounded-lg outline-orange-400 bg-white/80 font-medium' name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name'/>
          </div>
          <input required className='mb-4 w-full p-3 border border-orange-200 rounded-lg outline-orange-400 bg-white/80 font-medium' name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address' />
          <input required className='mb-4 w-full p-3 border border-orange-200 rounded-lg outline-orange-400 bg-white/80 font-medium' name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street'/>
          <div className='flex gap-3'>
            <input required className='mb-4 w-full p-3 border border-orange-200 rounded-lg outline-orange-400 bg-white/80 font-medium' name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City'/>
            <input required className='mb-4 w-full p-3 border border-orange-200 rounded-lg outline-orange-400 bg-white/80 font-medium' name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State'/>
          </div>
          <div className='flex gap-3'>
            <input required className='mb-4 w-full p-3 border border-orange-200 rounded-lg outline-orange-400 bg-white/80 font-medium' name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code'/>
            <input required className='mb-4 w-full p-3 border border-orange-200 rounded-lg outline-orange-400 bg-white/80 font-medium' name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country'/>
          </div>
          <input required className='mb-4 w-full p-3 border border-orange-200 rounded-lg outline-orange-400 bg-white/80 font-medium' name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
        </div>
        <div className='w-full max-w-[max(40%,500px)]'>
          <div className="flex-1 flex flex-col gap-6 bg-white/80 rounded-2xl p-6 shadow-md">
            <h2 className="font-extrabold text-orange-600 text-2xl mb-2 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">Cart Totals</h2>
            <div>
              <div className="flex justify-between text-gray-700 font-medium">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className="my-2" />
              <div className='flex justify-between text-gray-700 font-medium'>
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr className="my-2" />
              <div className='flex justify-between text-gray-800 font-bold'>
                <b>Total</b>
                <b>${getTotalCartAmount() === 0 ? 0 :getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button type='submit' className="mt-4 border-none text-white font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 w-full py-3 rounded-xl shadow-md text-lg cursor-pointer hover:scale-105 transition-transform">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default PlaceOrder