import { useCallback } from 'react'

export default function Pricing() {
  const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID

  const handleBuy = useCallback(async (amount, planName) => {
    try {
      const res = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      })
      if (!res.ok) throw new Error('Order creation failed')
      const order = await res.json()

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'WebVeda.ai',
        description: planName,
        order_id: order.id,
        handler: function (response) {
          alert('Payment successful! ID: ' + response.razorpay_payment_id)
        },
        prefill: { email: '', contact: '' },
        theme: { color: '#2A52BE' },
      }
      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (err) {
      console.error(err)
      alert('Failed to initiate payment: ' + err.message)
    }
  }, [])

  const openContactForm = () => {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="pricing-grid">
      <div className="card">
        <h3>Starter</h3>
        <p>₹1,199 / month</p>
        <button onClick={() => handleBuy(1199, 'Starter Plan')} className="btn-primary">
          Buy Now
        </button>
      </div>
      <div className="card">
        <h3>Pro</h3>
        <p>₹4,999 / month</p>
        <button onClick={() => handleBuy(4999, 'Pro Plan')} className="btn-primary">
          Buy Now
        </button>
      </div>
      <div className="card">
        <h3>Enterprise</h3>
        <p>Custom Quote</p>
        <button onClick={openContactForm} className="btn-secondary">
          Get Quote
        </button>
      </div>
    </div>
)
}
