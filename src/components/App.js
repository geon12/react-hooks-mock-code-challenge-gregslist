import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings,setListings] = useState([]);
  const [search, setSearch] = useState("")

  const filteredListings = listings.filter((listing) =>{
    if (!search) return true

    return listing.description.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div className="app">
      <Header setSearch={setSearch}/>
      <ListingsContainer listings={filteredListings} setListings={setListings}/>
    </div>
  );
}

export default App;
