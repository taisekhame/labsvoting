import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const SuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/#categories');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Vote Successful!
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for participating in the EMT Voting Event.
          You will be redirected back to the categories page shortly.
        </p>
        <button
          onClick={() => navigate('/#categories')}
          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full
            font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1
            transition-all duration-300"
        >
          Return to Categories
        </button>
      </motion.div>
    </div>
  );
};

export default SuccessPage;