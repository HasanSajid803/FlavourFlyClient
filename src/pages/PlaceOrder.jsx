import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

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
    <section className="w-full py-12 mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={placeOrder} className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Card>
            <CardHeader>
              <CardTitle className="font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Delivery Information</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='firstName'>First name</Label>
                  <Input id='firstName' name='firstName' onChange={onChangeHandler} value={data.firstName} required />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='lastName'>Last name</Label>
                  <Input id='lastName' name='lastName' onChange={onChangeHandler} value={data.lastName} required />
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' type='email' name='email' onChange={onChangeHandler} value={data.email} required />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='street'>Street</Label>
                <Input id='street' name='street' onChange={onChangeHandler} value={data.street} required />
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='city'>City</Label>
                  <Input id='city' name='city' onChange={onChangeHandler} value={data.city} required />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='state'>State</Label>
                  <Input id='state' name='state' onChange={onChangeHandler} value={data.state} required />
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='zipcode'>Zip code</Label>
                  <Input id='zipcode' name='zipcode' onChange={onChangeHandler} value={data.zipcode} required />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='country'>Country</Label>
                  <Input id='country' name='country' onChange={onChangeHandler} value={data.country} required />
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='phone'>Phone</Label>
                <Input id='phone' name='phone' onChange={onChangeHandler} value={data.phone} required />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Cart Totals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery Fee</p>
                  <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                </div>
                <div className="flex justify-between text-base font-semibold">
                  <p>Total</p>
                  <p>${getTotalCartAmount() === 0 ? 0 :getTotalCartAmount() + 2}</p>
                </div>
              </div>
              <Button type='submit' className='mt-6 w-full bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 text-primary-foreground'>Proceed to payment</Button>
            </CardContent>
          </Card>
        </form>
      </div>
    </section>
  )
}

export default PlaceOrder