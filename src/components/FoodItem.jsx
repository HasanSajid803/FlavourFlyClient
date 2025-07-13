import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'
import TiltedCard from './TiltedCard'

function FoodItem({id, name, price, description, image}) {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext)

  return (
    <TiltedCard>
      <div className="w-full m-auto rounded-2xl bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 border-2 border-orange-100 shadow-lg transition-all duration-300 overflow-hidden group">
        <div className="relative">
          <img className="w-full rounded-t-2xl object-cover h-[200px]" src={image} alt={name} />
          {
            !cartItems[id] 
            ? <img className="w-[38px] absolute bottom-4 right-4 cursor-pointer rounded-full bg-white/90 p-2 shadow-lg" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to cart" />
            : <div className="absolute bottom-4 right-4 flex items-center gap-2 p-2 rounded-full bg-white/90 shadow-lg">
                <img onClick={() => removeFromCart(id) } src={assets.remove_icon_red} alt="Remove" className="w-6 h-6 cursor-pointer" />
                <span className="text-sm font-bold text-gray-800">{cartItems[id]}</span>
                <img onClick={() => addToCart(id) } src={assets.add_icon_green} alt="Add" className="w-6 h-6 cursor-pointer" />
              </div>
          }
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-bold text-gray-800">{name}</p>
            <img className="w-14" src={assets.rating_starts} alt="Rating" />
          </div>
          <p className="text-xs text-gray-500 mb-2 line-clamp-2">{description}</p>
          <p className="text-orange-600 text-xl font-extrabold my-2">${price}</p>
        </div>
      </div>
    </TiltedCard>
  )
}

export default FoodItem