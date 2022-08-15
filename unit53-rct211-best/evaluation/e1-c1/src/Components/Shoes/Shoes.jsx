import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoeCard from "./ShoeCard/ShoeCard"
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";

const Shoes = () => {
  return <div>{/* Map through the shoes list here */}

   
  
    <ShoeCard/>
  </div>;
};

export default Shoes;
