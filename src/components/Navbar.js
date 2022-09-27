import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authActions } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const totalItem = useSelector((state)=>state.food.totalItem);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnLogout = () => {
    dispatch(authActions.logout());
    navigate('/login');
  };

  return (
    <div className="flex justify-around bg-red-700 font-bold text-white w-full">
      <div className="py-5">
        <Link to="/"> FoodApp</Link>
      </div>
      <ul className="flex gap-12 py-5">
        <li>
          <Link to="/home/cart">Cart({totalItem})</Link>
        </li>
        <li onClick={handleOnLogout} className="cursor-pointer"> Logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
