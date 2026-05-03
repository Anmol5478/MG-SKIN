import { useState, useEffect } from 'react';
import { Star, User, Send } from 'react-feather';
import Navbar from './navbar';
import { isSheetDbConfigured, submitToSheetDb } from '../lib/sheetDb';

const defaultReviews = [
  {
    id: 'default-1',
    name: 'Priya Sharma',
    treatment: 'Acne & Acne Scar Treatment',
    rating: 5,
    comment: 'Dr. Meghna helped me understand my acne triggers and my skin looks much clearer now.'
  },
  {
    id: 'default-2',
    name: 'Rahul Verma',
    treatment: 'Laser Treatment',
    rating: 5,
    comment: 'Professional clinic, clear guidance, and very comfortable experience.'
  },
  {
    id: 'default-3',
    name: 'Neha Gupta',
    treatment: 'Chemical Peels',
    rating: 5,
    comment: 'My pigmentation improved and the aftercare instructions were explained very well.'
  }
];

const storageKey = 'mg-skin-reviews';

const Reviews = () => {
  const [reviews, setReviews] = useState(defaultReviews);
  const [newReview, setNewReview] = useState({ name: '', treatment: '', rating: 0, comment: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem(storageKey) || '[]');
    setReviews([...savedReviews, ...defaultReviews]);
  }, []);

  const validateReview = () => {
    const nextErrors = {};
    if (!newReview.name.trim()) nextErrors.name = 'Name is required';
    if (!newReview.rating) nextErrors.rating = 'Please select a rating';
    if (!newReview.comment.trim()) nextErrors.comment = 'Review is required';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    if (!validateReview()) return;

    const review = {
      id: `local-${Date.now()}`,
      ...newReview,
      createdAt: new Date().toISOString()
    };

    setIsSubmitting(true);
    try {
      await submitToSheetDb('Reviews', {
        ...review
      });
      const savedReviews = JSON.parse(localStorage.getItem(storageKey) || '[]');
      localStorage.setItem(storageKey, JSON.stringify([review, ...savedReviews]));
      setReviews([review, ...reviews]);
      setNewReview({ name: '', treatment: '', rating: 0, comment: '' });
      setStatus('Thank you. Your review has been submitted.');
    } catch (error) {
      console.error('Failed to submit review:', error);
      setStatus(
        isSheetDbConfigured
          ? 'Could not send the review right now. Please try again.'
          : 'SheetDB is not connected yet. Add your SheetDB API URL in VITE_SHEETDB_API_URL.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center pt-20 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Patient Reviews</h1>
          <p className="text-gray-600">Read patient feedback and share your own clinic experience.</p>
        </div>
        
        {/* Review Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-xl font-semibold mb-4">Share Your Experience</h2>
          {!isSheetDbConfigured && (
            <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-2">Your Name</label>
                <input
                  type="text"
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                  className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label className="block mb-2">Treatment</label>
                <input
                  type="text"
                  value={newReview.treatment}
                  onChange={(e) => setNewReview({...newReview, treatment: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Treatment received, optional"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2">Rating</label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        setNewReview({ ...newReview, rating: star });
                      }
                    }}
                    role="button"
                    tabIndex="0"
                    aria-label={`${star} star rating`}
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
              {errors.rating && <p className="mt-1 text-sm text-red-500">{errors.rating}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-2">Your Review</label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                className={`w-full p-3 border rounded-lg ${errors.comment ? 'border-red-500' : 'border-gray-300'}`}
                rows="4"
                placeholder="Write your experience"
              ></textarea>
              {errors.comment && <p className="mt-1 text-sm text-red-500">{errors.comment}</p>}
            </div>
            {status && (
              <div className={`mb-4 rounded-lg border p-3 text-sm ${status.startsWith('Thank') ? 'border-green-200 bg-green-50 text-green-700' : 'border-red-200 bg-red-50 text-red-600'}`}>
                {status}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-5 py-3 rounded-full flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Send className="mr-2" size={16} /> {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>

        {/* Reviews List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 text-blue-800 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <User size={18} />
                </div>
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  {review.treatment && <p className="text-sm text-blue-600">{review.treatment}</p>}
                </div>
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
