import { useEffect, useState } from 'react';

export default ({ text, plan }) => {
  const [stripe, setStripe] = useState(null);
  useEffect(() => setStripe(window.Stripe(process.env.STRIPE_PUBLISHABLE_KEY)), []);

  const goToCheckout = () => {
    stripe.redirectToCheckout({
      lineItems: [{
        price: plan || process.env.STRIPE_PLAN_WITH_PLANET, quantity: 1
      }],
      mode: 'subscription',
      successUrl: 'https://www.urth.systems/success',
      cancelUrl: 'https://www.urth.systems/',
    })
    .then(function (result) {
      if (result.error) {
        console.log(result.error.message);
      }
    });
  };

  return (
    <button onClick={goToCheckout} className="bg-white text-black font-bold py-4 px-4 md:py-4 md:px-8 md:text-xl rounded hover:shadow-2xl">
      { text || 'Subscribe to Urth' }
    </button>
  )
}
