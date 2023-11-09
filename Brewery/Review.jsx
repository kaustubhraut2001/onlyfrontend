import React, { useState } from 'react';
import Navigation from '../Component/Navigation';

const AddReview = () => {
  const [rating, setRating] = useState(1);
  const [description, setDescription] = useState('');

  const handleAddReview = () => {
    const newReview = {
      rating,
      description,
    };
    console.log('Added Review:', newReview);
  };

  return (
    <div>
      <Navigation/>
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Add a Review</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        ></textarea>
      </div>
      <button
        onClick={handleAddReview}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Review
      </button>
    </div>
    </div>
  );
};

export default AddReview;