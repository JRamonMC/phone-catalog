import React from 'react';
import {API} from '../../config';
import './ShowImage.css';
import Loader from "react-loader-spinner";




const ShowImage = ({item, url}) => (
  
  <div className="product-img">
    {item._id ? <img
      src={`${API}/${url}phoneimage/${item._id}`}
      alt={item.name}
      className="mb-3 img-cont"
      style={{maxHeight: "600px", maxWidth:"300px"}}/> : 
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />}
  </div>
)

export default ShowImage;