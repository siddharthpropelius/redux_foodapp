import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { fetchData } from '../redux/slices/foodSlice';
import { useDispatch, useSelector } from 'react-redux';
import FoodCard from './FoodCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const foodList = useSelector((state) => state.food.foodList);
  const auth = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    dispatch(fetchData());
    if (!auth) {
      navigate('/login');
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div className="w-3/4  m-auto my-5 flex flex-wrap gap-6">
        {foodList.map((item) => {
          return (
            <>
              <div key={item.id}>
                <FoodCard
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
