import React, { useState } from "react";

function ListingCard({listing,onDeleteListing}) {
  const {id, description, image, location} = listing
  const [favorite, setFavorite] = useState(false)
  
  function handleFavoriteClick() {
    setFavorite(!favorite)
  }

  function handleDeleteListing() {
    onDeleteListing(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteListing} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
