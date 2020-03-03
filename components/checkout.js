import { useEffect, useState } from 'react';

const Checkout = () => {
  const [stripe, setStripe] = useState(null);

  useEffect(() => setStripe(window.Stripe(process.env.STRIPE_PUBLISHABLE_KEY)), []);

  const goToCheckout = () => {
    stripe.redirectToCheckout({
      items: [{plan: process.env.STRIPE_PLAN_ID, quantity: 1}],
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
    <div>
      <h3 className="md:text-4xl text-2xl font-bold mb-4">Fast, Reliable Urbit Planets</h3>
      <h4 className="md:text-xl font-thin leading-relaxed max-w-2xl mx-auto mb-10">
        Unlike many OpenSea sellers, <strong>urth</strong> is a star operator. We give you a planet for free with our sponsorship service - and it's yours forever, even if you cancel.
      </h4>
      <button onClick={goToCheckout} className="bg-white text-black font-semibold py-4 px-8 md:text-xl rounded hover:text-white hover:bg-transparent hover:border hover:border-white">
        Buy Planet Sponsorship
      </button>
      <p className="mt-6">
        Limited edition launch pricing at just $5/month billed quarterly
      </p>
      <p className="font-bold">
        free planet included
      </p>
    </div>
  )
}

export default Checkout
