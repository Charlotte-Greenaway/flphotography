import React from 'react';

const NoPage = () => {
  return (
    <div className="flex items-center justify-center  text-gray-900 my-10">
      <div className="text-center py-7">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl font-light mb-4">Oops! Page not found.</p>
        <p className="mb-8">We can't find the page you're looking for.</p>
        <button
          onClick={() => window.history.back()}
          className="bg-black hover:bg-grey text-white font-bold py-2 px-4 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NoPage;
