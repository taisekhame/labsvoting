import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import axios from 'axios'; 

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
  const [email, setEmail] = useState('');
  const [votes, setVotes] = useState<string>('1');
  const [isEmailValid, setIsEmailValid] = useState(false);

  // Flutterwave payment details
  const PUBLIC_KEY = 'FLWPUBK_TEST-684d3c10cecd24436aff0a0c34b8eff8-X';
  const CURRENCY = 'NGN';
  const TX_REF = `txref-${Date.now()}`; // Generate unique transaction reference

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  const voteCount = votes === '' ? 0 : parseInt(votes);
  const isValidVoteCount = voteCount >= 1;
  const totalCost = isValidVoteCount ? voteCount * 50 : 0;
  const isFormValid = isEmailValid && isValidVoteCount;

  // Webhook function to send data to Firebase after successful payment
  const sendWebhookToFirebase = async (transactionDetails: any) => {
    try {
      const response = await axios.post('YOUR_FIREBASE_WEBHOOK_ENDPOINT', {
        transactionId: transactionDetails.tx_ref,
        nomineeId: nominee.id,
        nomineeName: nominee.name,
        numberOfVotes: voteCount,
        amountPaid: totalCost,
        email: email
      });
      console.log('Webhook sent successfully', response.data);
    } catch (error) {
      console.error('Error sending webhook', error);
    }
  };

  // Override form submission to handle custom redirect and webhook
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add an onsubmit event listener to the Flutterwave payment form
    const form = e.target as HTMLFormElement;
    form.onsubmit = (submitEvent) => {
      submitEvent.preventDefault();
      
      // After payment, redirect to success page
      const successRedirect = () => {
        // Send webhook to Firebase
        sendWebhookToFirebase({ tx_ref: TX_REF });
        
        // Redirect to success page
        window.location.href = 'http://localhost:5174/success';
      };

      // Simulate payment completion (replace with actual Flutterwave payment completion logic)
      successRedirect();
    };

    // Submit the form
    form.submit();
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
        
        <form 
          method="POST"
          action="https://checkout.flutterwave.com/v3/hosted/pay"
          onSubmit={handleFormSubmit}
          className="space-y-4"
        >
          {/* Hidden Flutterwave payment inputs */}
          <input
            type="hidden"
            name="public_key"
            value={PUBLIC_KEY}
          />
          <input
            type="hidden"
            name="customer[email]"
            value={email}
          />
          <input
            type="hidden"
            name="customer[name]"
            value={nominee.name}
          />
          <input
            type="hidden"
            name="tx_ref"
            value={TX_REF}
          />
          <input
            type="hidden"
            name="amount"
            value={totalCost.toString()}
          />
          <input
            type="hidden"
            name="currency"
            value={CURRENCY}
          />
          <input
            type="hidden"
            name="meta[nominee_id]"
            value={nominee.id.toString()}
          />
          <input
            type="hidden"
            name="meta[votes_count]"
            value={voteCount.toString()}
          />
          
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
              (₦50 per vote)
            </p>
          </div>
          
          <button
            type="submit"
            id="start-payment-button"
            disabled={!isFormValid}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg
              font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1
              transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
              disabled:transform-none disabled:hover:shadow-lg"
          >
            Proceed to Payment
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default VoteModal;