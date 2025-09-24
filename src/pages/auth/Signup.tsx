import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function Login() {
  const location = useLocation()
  console.log(location)

  const isNotifyLogin =
    new URLSearchParams(location.search).get('pre') === 'true'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null) // Store logged-in user
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()
      console.log('Login response:', data)

      if (data.success) {
        setUser(data.user) // Save user info
      } else {
        setError(data.message || 'Invalid credentials')
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('Failed to connect to backend')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-20 bg-indigo-50 p-6 rounded-xl shadow-md">
      {user ? (
        <div className="text-center">
          <h1 className="text-2xl text-black font-bold mb-4">Welcome</h1>
          <p className="text-green-600 font-semibold">
            Logged in as <strong>{user.email}</strong>
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-2xl text-stone-700 font-bold mb-4 text-center">
            Login
          </h1>
          <form onSubmit={handleLogin}>
            <label className="block text-stone-700  mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input bg-indigo-100 input-bordered w-full mb-4"
              required
            />

            <label className="block text-stone-700  mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input bg-indigo-100 input-bordered w-full mb-4"
              required
            />

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
        </>
      )}
    </div>
  )
}

export default Login
