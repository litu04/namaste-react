import React, { useEffect, useState } from 'react'
import { swiggy_api_URL } from "../constant"
import RestaurantCard from "./RestaurantCard"
import Shimmer from './Shimmer'

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filterRestaurants, setFilterRestaurants] = useState([])
  const [searchText,setSearchText] = useState("")
  const [errMsg, setErrMsg] = useState("")
  const filterData = (text,restaurants) => {
    return restaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(text.toLowerCase()))
  }


  useEffect(() => {
    getRestaurant()
  },[])

  async function getRestaurant(){
    try{
      const data = await fetch(swiggy_api_URL)
      const json  = await data.json()
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
      setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    } catch(err) {
      console.log("Error--> ", err)
    }
  }
  function searchData(searchText,restaurants){
    if (searchText !== ""){
      const data = filterData(searchText, restaurants)
      setFilterRestaurants(data)
      setErrMsg
      if (data?.length === 0){
        setErrMsg("No Restaurants found")
      }
    } else {
      setErrMsg("")
      setFilterRestaurants(restaurants)
    }
  }

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;
  return (
    <>
      <div className='search-container'>
        <input className="search-input" value={searchText} placeholder="Search here..." onChange={(e) => setSearchText(e.target.value)}/>
        <button className="search-btn" onClick={() => searchData(searchText, allRestaurants)}>Search</button>
      </div>
      {errMsg && <div className="err-container">{errMsg}</div>}
      {allRestaurants.length === 0 ? (<Shimmer/>) : (
        <div className="restaurant-list">
          {filterRestaurants?.map((restaurant) => <RestaurantCard key={restaurant?.data?.id} {...restaurant?.data} />)}
        </div>
      )}
    </>
  )
}

export default Body