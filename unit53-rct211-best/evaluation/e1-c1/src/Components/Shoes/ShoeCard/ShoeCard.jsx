import React from "react";

const ShoeCard = () => {
  const shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}>
      <img data-cy="shoe-card-image" alt="shoe" />
      <div>
        <div data-cy="shoe-name">shoe-name</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">0</div>
          <button data-cy="increment-shoe-count-button">+</button>
          <button data-cy="decrement-shoe-count-button">-</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
