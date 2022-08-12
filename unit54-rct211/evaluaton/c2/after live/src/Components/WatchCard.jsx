import React from "react";

const WatchCard = ({ id, data }) => {
  return (
    <div data-testid={`watch-card-wrapper-${id}`} 
    //////
    // style={{border: '10px solid green'}}
     >
      <div className="card" >
        <img data-testid="watch-card-image" src={data.image} alt=""
        style={{width: "100%"}} />
      </div>
      <div>
        <div data-testid="watch-name">{data.name} </div>
        <div data-testid="watch-category"> {data.category} </div>
      </div>
    </div>
  );
};

export default WatchCard;


// const BookCardWrapper = styled.div`
//   border: 1px solid blue;
//   padding: 5px;
//   width: 310px;
// `;
