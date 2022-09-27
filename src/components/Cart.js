import React from 'react';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  let total = 0;
  const cartList = useSelector((state) => state.food.cartList);
  cartList.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <div>
      <Navbar />
      {cartList.length ? (
        <>
          <div className="w-3/4  m-auto my-5 flex flex-wrap gap-6">
            {cartList.map((item) => {
              return (
                <>
                  <CartItem
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    img={item.img}
                  />
                </>
              );
            })}
          </div>
          <p className="px-16 text-2xl font-bold">Total : ${total}</p>
        </>
      ) : (
        <div className="text-center text-3xl mt-[32px] underline">
          Nothing in the cart .... Add something
        </div>
      )}
    </div>
  );
};

export default Cart;
