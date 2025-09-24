const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors()) // Allow frontend to talk to backend
app.use(express.json())

// Dummy user data
const dummyUser = {
  email: 'john@example.com',
  password: 'test123',
  name: 'John Doe',
}

// Get user info (optional)
app.get('/user', (req, res) => {
  res.json({ email: dummyUser.email, name: dummyUser.name })
})

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body
  console.log('Login attempt:', { email, password })

  if (email === dummyUser.email && password === dummyUser.password) {
    res.json({
      success: true,
      user: {
        email: dummyUser.email,
        name: dummyUser.name,
      },
    })
  } else {
    res.json({
      success: false,
      message: 'Invalid email or password',
    })
  }
})

app.listen(3000, () => {
  console.log('✅ Backend running on http://localhost:3000')
})
