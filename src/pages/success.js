import React from 'react';
import { Link } from 'react-router-dom'; 

const SuccessPage = () => {
  return (
    <div className="flex items-center justify-center my-10 montserrat">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-black mb-4 py-5">Success!</h1>
        <p className="text-lg mb-6">Your submission has been received. We will be in touch soon!</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
