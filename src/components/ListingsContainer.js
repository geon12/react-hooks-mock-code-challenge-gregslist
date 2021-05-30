import React from "react";
import {useEffect} from "react"
import ListingCard from "./ListingCard";

function ListingsContainer({listings,setListings}) {

  
  const BASE_URL = "http://localhost:6001"
  
  useEffect(() => {
    fetch(`${BASE_URL}/listings`)
      .then(res => res.json())
      .then(res => setListings(res))
      .catch(console.error)
  },[]);

  function deleteListing(id) {
    fetch(`${BASE_URL}/listings/${id}`,{method:'DELETE'})
      .then(res => res.json())
      .then( () => {
        const newListings = listings.filter((listing) => listing.id !== id )
        setListings(newListings)
      })

    
  }

  return (
    <main>
      <ul className="cards">
        
        {listings.map((listing) => <ListingCard listing={listing} key={listing.id} onDeleteListing={deleteListing}/>)}

      </ul>
    </main>
  );
}

export default ListingsContainer;
