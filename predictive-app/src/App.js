// Import necessary modules and assets
import React from 'react';
import logo from './logo.svg';
import './App.css';

// Define the IntroPage component
const IntroPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-navy-blue relative">
      {/* Background Images */}
      <img
        src="Machine1.png"
        alt="ML Graphic 1"
        className="absolute top-10 left-10 w-32 opacity-50"
      />
      <img
        src="Machine2.png"
        alt="ML Graphic 2"
        className="absolute bottom-10 right-10 w-32 opacity-50"
      />
      
      {/* Content Box */}
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Hello Friend 🫱🏻‍🫲🏻</h1>
        <p className="text-lg text-gray-700">
          Welcome to our ML model! This model is designed to predict customer churn 
          based on various features. By leveraging advanced algorithms and data 
          processing techniques, it provides accurate insights to enhance decision-making.
        </p>
        <button className="mt-6 bg-black text-white py-2 px-6 rounded-full text-lg hover:bg-gray-800">
          Let's get started
        </button>
      </div>
    </div>
  );
};

// Define the App component
function App() {
  return (
    <div className="App">
      {/* Render the IntroPage component */}
      <IntroPage />
    </div>
  );
}

export default App;
