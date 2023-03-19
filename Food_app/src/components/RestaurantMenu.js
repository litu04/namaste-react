import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import { IMG_CDN_URL } from "../constant"

const RestaurantMenu = () => {
  // dynamically reading url params
    const params = useParams()
    const { id } = params
    const [restaurantInfo, setRestaurantInfo] = useState(null)

    useEffect(() => {
        getRestaurantMenu()
    },[])

    async function getRestaurantMenu(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.956924&lng=77.701127&restaurantId=${id}&submitAction=ENTER`)
        const json = await data.json()
        console.log("fgh--> ", json?.data)
        setRestaurantInfo(json.data)
    }
  return (
    <>
      {! restaurantInfo ? <Shimmer/> : (
        <div className="card">
          <h1>Restaurant Id: {id}</h1>
          <h2>{restaurantInfo?.cards[0]?.card?.card?.info?.name}</h2>
          <img src={IMG_CDN_URL + restaurantInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId}/>
          <h3>{restaurantInfo?.cards[0]?.card?.card?.info?.areaName} {restaurantInfo?.cards[0]?.card?.card?.info?.locality}</h3>
          <h4>{restaurantInfo?.cards[0]?.card?.card?.info?.avgRatingString} stars</h4>
          <h4>{restaurantInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h4>
        </div>
      )}
    </>
  )
}

export default RestaurantMenu