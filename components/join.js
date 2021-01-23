import { useEffect, useState, Fragment } from 'react';
import { isValidPatp } from 'urbit-ob';

export default ({ text, plan }) => {
  const [stripe, setStripe] = useState(null);
  const [patp, setPatp] = useState("")
  const [valid, setValid] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => setStripe(window.Stripe(process.env.STRIPE_PUBLISHABLE_KEY)), []);

  function changePatp(newPatp) {
    setPatp(newPatp)
    setValid(isValidPatp(newPatp))
  }

  async function checkout() {
    setLoading(true)
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        patp
      })
    })

    const session = await response.json()

    stripe.redirectToCheckout({ sessionId: session.sessionId })
  }

  return (
    <Fragment>
      <input
        type="text"
        placeholder="Your Urbit ID (@p)"
        onChange={(e) => changePatp(e.target.value)}
        className="font-bold py-3 px-4 md:py-3 md:px-4 md:text-xl bg-transparent border-solid border-4 border-white	rounded mr-4" />
      
      { valid & !loading
        ? (
          <button onClick={() => checkout()} className="bg-white text-black font-bold py-4 px-4 md:py-4 md:px-8 md:text-xl rounded">
            Join 
          </button>
        )
        : null}
    </Fragment>  
  )
}
