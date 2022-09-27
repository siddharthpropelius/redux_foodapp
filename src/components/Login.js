import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../redux/slices/authSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    if (email.trim().length === 0 || password.trim().length === 0) {
      setError('Email or Password cant be Empty ');
      setTimeout(() => setError(''), 2500);
    } else if (password.trim().length < 6 || password.trim().length > 14) {
      setError('Password must greater than 6 and less than 14 characters');
      setTimeout(() => setError(''), 2500);
    } else {
      navigate('/');
    }
    dispatch(authActions.login({ email, password }));
  };
  return (
    <div>
      <h3 className="text-center mt-[40px] font-bold text-4xl">
        Login into FoodApp
      </h3>
      <div className="flex justify-center w-1/3 border-2 m-auto mt-[30px] py-[15px]">
        <form className="w-full max-w-sm" onSubmit={handleOnSubmit}>
          <div className="flex flex-col items-center border-b border-teal-500 py-2">
            <p>
              {!error ? '' : <p className="text-red-900 font-bold">{error}</p>}
            </p>
            <input
              ref={emailRef}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="email"
              placeholder="Email"
              autoComplete="on"
            />
          </div>
          <div className="flex flex-col items-center border-b border-teal-500 py-2">
            <input
              ref={passwordRef}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="password"
              placeholder="Password"
              autoComplete="on"
            />
          </div>

          <button className="rounded bg-teal-500 px-[15px] py-[6px] mx-auto mt-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
