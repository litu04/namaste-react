import React, { useState } from 'react'
import { restaurantList } from "../constant"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList)
  const [searchText,setSearchText] = useState("")
  const filterData = (text,restaurants) => {
    const data = restaurants.filter((restaurant) => restaurant.data.name.includes(text))
    setRestaurants(data)
  }
  return (
    <>
      <div className='search-container'>
        <input className="search-input" value={searchText} placeholder="Search here..." onChange={(e) => setSearchText(e.target.value)}/>
        <button className="search-btn" onClick={() => filterData(searchText, restaurants)}>Search</button>
      </div>
      <div className="restaurant-list">
          {restaurants.map((restaurant) => <RestaurantCard key={restaurant.data.id} {...restaurant.data} />)}
      </div>
    </>
  )
}

export default Body