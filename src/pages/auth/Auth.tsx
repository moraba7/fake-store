import axios from 'axios'

export async function signupRequest(email: string, password: string) {
  try {
    const response = await axios.post('http://localhost:3000/signup', {
      email,
      password,
    })
    return response.data
  } catch (err) {
    console.error('Signup error:', err)
    throw new Error('Failed to connect to backend')
  }
}
