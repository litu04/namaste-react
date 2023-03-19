import React from 'react'
import { IMG_CDN_URL } from "../constant"

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  costForTwoString,
}) => {
  return (
      <div className="card">
          <img src={IMG_CDN_URL + cloudinaryImageId} />
          <h2>{name}</h2>
          <h3>{cuisines?.join(", ")}</h3>
          <h4>{costForTwoString}</h4>
      </div>
  )
}

export default RestaurantCard