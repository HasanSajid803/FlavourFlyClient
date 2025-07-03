import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

function FoodDisplay({category}) {
  const { food_list } = useContext(StoreContext);

  return (
    <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
      {/* Gradient background and rounded corners to match header */}
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-yellow-50 via-orange-100 to-pink-50 p-6 sm:p-10 shadow-xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent drop-shadow">
            Top dishes near you
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover the most popular and delicious dishes from our curated menu
          </p>
        </div>
        <div className='grid gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem 
                  key={index}
                  id={item._id} 
                  name={item.name} 
                  description={item.description} 
                  price={item.price} 
                  image={item.image} 
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  )
}

export default FoodDisplay