import React, { useContext, useCallback, memo } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'
import TiltedCard from './TiltedCard'

function FoodItem({id, name, price, description, image}) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)

  const handleAdd = useCallback(() => addToCart(id), [addToCart, id])
  const handleRemove = useCallback(() => removeFromCart(id), [removeFromCart, id])

  return (
    <TiltedCard>
      <div className="max-w-[250px] sm:max-w-[350] w-full m-auto rounded-2xl bg-card text-card-foreground border border-border shadow-lg transition-all duration-300 overflow-hidden group hover:shadow-xl will-change-transform" style={{ contentVisibility: 'auto', contain: 'content' }}>
        <div className="relative">
          <img
            className="w-full rounded-t-2xl object-cover h-[200px] sm:h-[200px] md:h-[200px]"
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {
            !cartItems[id] 
            ? <img className="w-[32px] sm:w-[36px] md:w-[38px] absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 cursor-pointer rounded-full bg-background/90 p-1.5 sm:p-2 shadow-lg border border-border" onClick={handleAdd} src={assets.add_icon_white} alt="Add to cart" loading="lazy" decoding="async" fetchpriority="low" />
            : <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 flex items-center gap-1 sm:gap-1.5 md:gap-2 p-1.5 sm:p-2 rounded-full bg-background/90 shadow-lg border border-border">
                <img onClick={handleRemove} src={assets.remove_icon_red} alt="Remove" className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" loading="lazy" decoding="async" fetchpriority="low" />
                <span className="text-xs sm:text-sm font-bold">{cartItems[id]}</span>
                <img onClick={handleAdd} src={assets.add_icon_green} alt="Add" className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" loading="lazy" decoding="async" fetchpriority="low" />
              </div>
          }
        </div>
        <div className="p-3 sm:p-4 md:p-5">
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-bold line-clamp-1">{name}</p>
            <img className="w-14" src={assets.rating_starts} alt="Rating" loading="lazy" decoding="async" fetchpriority="low" />
          </div>
          <p className="text-xs text-muted-foreground mb-2 line-clamp-2 leading-relaxed">{description}</p>
          <p className="text-primary text-lg sm:text-xl font-extrabold my-2">${price}</p>
        </div>
      </div>
    </TiltedCard>
  )
}

export default memo(FoodItem)