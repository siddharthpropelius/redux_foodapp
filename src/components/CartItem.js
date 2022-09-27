import React from 'react';
import { useDispatch } from 'react-redux';
import { foodActions } from '../redux/slices/foodSlice';

const CartItem = ({ id, img, quantity, name, price }) => {
  const dispatch = useDispatch();

  const handleOnIncrement = () => {
    dispatch(foodActions.addToCart({ id, name, price, img }));
  };

  const handleOnDecrement = () => {
    dispatch(foodActions.removeFromCart(id));
  };
  return (
    <div>
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
            onClick={handleOnDecrement}
          >
            -
          </button>
          {quantity}
          <button
            className="bg-orange-500 px-2 py-1 rounded-sm text-white ml-2"
            onClick={handleOnIncrement}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
