import React, { useState } from 'react'
import Header from '../components/Header/Header'
import ExploreMenu from '../components/Exploremenu'
import FoodDisplay from '../components/FoodDisplay';
import AppDownload from '../components/AppDownload';

function Home() {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/> 
      <AppDownload />
    </div>
  )
}

export default Home