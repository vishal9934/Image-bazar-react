
import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
function App() {
  let [image,setImage]=useState([]);
  console.log(image);


  return (
   
    <div className="App">
     <SearchBar addImages={setImage}/>
     <ImageGallery images={image}/>
    </div>
  );
}

export default App;
