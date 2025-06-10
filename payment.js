import express from 'express'
import razorpayRouter from '../../lib/razorpayRoute'

const app = express()
app.use(express.json())
app.use('/payment', razorpayRouter)

export default app
