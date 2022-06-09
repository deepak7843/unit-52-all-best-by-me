import React from "react";


const Offers = (props) => {
  return (
    <section className="offers">
      <div className="container">
         {props.offers.map( (offer, index) => (
           <img key={index} className="offer" src={offer} alt="" />
         ) )}

      </div>
    </section>
  );
};

export default Offers;
