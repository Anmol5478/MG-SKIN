import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, User, Send } from 'react-feather';
import Navbar from './navbar';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/reviews');
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview),
      });
      if (response.ok) {
        fetchReviews(); // Refresh reviews
        setNewReview({ name: '', rating: 0, comment: '' });
      }
    } catch (error) {
      console.error('Failed to submit review:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Patient Reviews</h1>
        
        {/* Review Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-xl font-semibold mb-4">Share Your Experience</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Your Name</label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Rating</label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={star <= newReview.rating ? 'gold' : 'none'}
                    stroke="gold"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="cursor-pointer w-6 h-6 mr-1"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.417 8.253L12 18.897l-7.417 4.626L6 15.27 0 9.423l8.332-1.268z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Your Review</label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                className="w-full p-2 border rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded flex items-center"
            >
              <Send className="mr-2" size={16} /> Submit Review
            </button>
          </form>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <User size={18} />
                </div>
                <h3 className="font-semibold">{review.name}</h3>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill={i < review.rating ? 'gold' : 'none'}
                    color="gold"
                    size={16}
                  />
                ))}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;