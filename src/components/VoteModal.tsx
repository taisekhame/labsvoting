import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import PaystackPop from '@paystack/inline-js'; // Import Paystack library
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface VoteModalProps {
  nominee: {
    id: number;
    name: string;
    image: string;
    description: string;
    achievements: string[];
  };
  onClose: () => void;
}

const VoteModal = ({ nominee, onClose }: VoteModalProps) => {
  const [email, setEmail] = useState<string>('');
  const {id} = useParams()
  const category_id = id
  const [votes, setVotes] = useState<string>('1');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  const voteCount = votes === '' ? 0 : parseInt(votes);
  const isValidVoteCount = voteCount >= 1;
  const totalCost = isValidVoteCount ? voteCount * 100 : 0;
  const isFormValid = isEmailValid && isValidVoteCount;

  const handlePaystackPayment = async () => {
    if (!isFormValid) {
      alert('Please provide a valid email and number of votes.');
      return;
    }

    try {
      const { data } = await axios.post('https://labsvoting-67f320409e27.herokuapp.com/api/paystack/initialize', {
        email,
        amount: totalCost,
        metadata: {
            category_id: category_id,
            nominee_name: nominee.name,
            nominee_id: nominee.id.toString(),
            vote_count: voteCount.toString()
        },
      });

      const handler = PaystackPop.setup({
        key: 'pk_live_93cdb51d89114f878edab08a3232bd7bc31e6198', // Replace with your Paystack public key
        email,
        amount: totalCost * 100, // Amount in kobo
        reference: data.data.reference, // Reference from backend
        metadata: {
            category_id: category_id, // Also pass category_id as metadata here
        },
        callback: async (response: { reference: string }) => {
          await axios.get(
            `https://labsvoting-67f320409e27.herokuapp.com/api/paystack/verify/${response.reference}`
          );
          alert('Payment successful!');
          navigate('/');
        },
        onClose: () => {
          alert('Transaction was not completed.');
        },
      });

      handler.openIframe();
    } catch (error) {
      console.error('Payment initialization error:', error);
      alert('Payment failed!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Vote for {nominee.name}
        </h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="votes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Number of Votes
            </label>
            <input
              type="number"
              id="votes"
              value={votes}
              onChange={(e) => setVotes(e.target.value)}
              min="1"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Voting for: <span className="font-bold">{nominee.name}</span>
            </p>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Total Cost: <span className="font-bold">₦{totalCost}</span>
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">
              (₦100 per vote)
            </p>
          </div>

          <button
            type="button"
            onClick={handlePaystackPayment}
            disabled={!isFormValid}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg
              font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1
              transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
              disabled:transform-none disabled:hover:shadow-lg"
          >
            Proceed to Payment
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default VoteModal;
