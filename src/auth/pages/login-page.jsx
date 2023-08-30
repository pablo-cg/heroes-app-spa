import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth-context'

export const LoginPage = () => {
  const navigate = useNavigate()

  const { login } = useContext(AuthContext)

  function handleLogIn() {
    login('Dodoria')

    const lastLocation = localStorage.getItem('last-location') || '/'
    navigate(lastLocation, { replace: true })
  }

  return (
    <>
      <header className="w-3/12 w-full p-4 mx-auto border-b">
        <h1 className="text-2xl font-bold whitespace-nowrap @dark:text-white">
          Login
        </h1>
      </header>
      <main className="container w-11/12 mx-auto my-4">
        <button
          onClick={handleLogIn}
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center @dark:border-gray-600 @dark:text-gray-400 @dark:hover:text-white @dark:hover:bg-gray-600 @dark:focus:ring-gray-800"
        >
          Log In
        </button>
      </main>
    </>
  )
}
