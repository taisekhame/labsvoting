const Payment = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <form 
        method="POST" 
        action="https://checkout.flutterwave.com/v3/hosted/pay"
        className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4 text-lg font-semibold text-gray-700">
          Your order is ₦2,000
        </div>
        <input 
          type="hidden" 
          name="public_key" 
          value="FLWPUBK_TEST-684d3c10cecd24436aff0a0c34b8eff8-X" 
        />
        <input 
          type="hidden" 
          name="customer[email]" 
          value="test@mailnator.com" 
        />
        <input 
          type="hidden" 
          name="customer[name]" 
          value="Ayomide Jimi-Oni" 
        />
        <input 
          type="hidden" 
          name="tx_ref" 
          value="txref-81123" 
        />
        <input 
          type="hidden" 
          name="amount" 
          value="2000" 
        />
        <input 
          type="hidden" 
          name="currency" 
          value="NGN" 
        />
        <input 
          type="hidden" 
          name="meta[source]" 
          value="docs-html-test" 
        />
        <div className="flex items-center justify-center">
          <button 
            type="submit" 
            id="start-payment-button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Pay Now
          </button>
        </div>
      </form>
    </div>
  );
};
  
export default Payment;