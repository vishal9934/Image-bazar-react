// Access key-   gdmoWrlH1zwIiRXK9C65Pm4too7yE5VPSvfjx-w4HvU
// Secrret key-   G52IQFbvsFN7ZqERgue2VTZHqeh79LMG-vpKnPly9LE

import axios from 'axios'
import { useState } from 'react';

function SearchBar({addImages}){
     let [searchTerm,setSearchTerm]=useState("");

    const handleSearch=async (e)=>{
        e.preventDefault();
        console.log("api is hitting")
        const response=await axios.get("https://api.unsplash.com/photos",{
            params:{query:searchTerm},
            headers:{
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
            }
        })
        addImages(response.data);
    }



    return(
        <div className="search-bar">
            <input type="text" placeholder="Search" onChange={(e)=>setSearchTerm(e.target.value)}/>
            <button type='button' onClick={handleSearch}>Search</button>
        </div>
    )
}
export default SearchBar;