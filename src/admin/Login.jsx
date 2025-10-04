import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();



  localStorage.getItem("Token");


  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');

    // Hardcoded credentials for demo
    if (username === 'admin' && password === 'admin') { 
      navigate('/admin/dashboard');
    } else {
      setLoginError('Invalid username or password.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>
          {loginError && (
            <p className="text-sm text-red-500 text-center">{loginError}</p>
          )}
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#C54142] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#a83232] focus:outline-none focus:ring-2 focus:ring-[#2b68e0] focus:ring-offset-2 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
