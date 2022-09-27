import React from 'react';
import { useDispatch } from 'react-redux';
import { foodActions } from '../redux/slices/foodSlice';

const FoodCard = ({ id, name, img, price }) => {
  const dispatch = useDispatch();

  const handleOnAddBtn = () => {
    dispatch(foodActions.addToCart({ id, name, img, price }));
  };
  return (
    <div className="bg- rounded-lg border border-black pb-4" key={id}>
      <img
        className="w-[300px] h-[300px] object-cover"
        src={img}
        alt="foodItem"
      />
      <p className=" text-2xl text-center">{name}</p>
      <p className=" text-xl font-bold text-center">${price}</p>
      <div className="text-center mt-2">
        <button
          className="bg-orange-500 px-2 py-1 rounded-sm text-white ml-2"
          onClick={handleOnAddBtn}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
