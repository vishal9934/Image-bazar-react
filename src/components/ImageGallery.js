import ImageView from "./ImageView";

function ImageGallery({images}){
   return(
    <div className="image-gallery">
           {
            images.map((photo,index) => (
               
                <ImageView key={index} photo={photo}/>
            ))
           }
          
    </div>
   )


}
export default ImageGallery;