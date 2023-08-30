import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/context/auth-context'

export const NavBar = () => {
  const navigate = useNavigate()

  const { authState, logout } = useContext(AuthContext)

  function handleLogOut() {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <header className="p-4 grid grid-cols-1 gap-4 sm:gap-0 sm:flex sm:items-center sm:justify-between mx-auto border-b">
      <h1 className="text-2xl text-center font-bold whitespace-nowrap @dark:text-white">
        <Link to="/">Heroes App</Link>
      </h1>

      <nav className="font-semibold text-lg mx-auto sm:flex-1">
        <ul className="flex items-center">
          <li className="px-4">
            <NavLink
              to="/marvel"
              className={({ isActive }) =>
                `hover:underline ${
                  isActive
                    ? 'text-zinc-900 @dark:text-zinc-50 underline'
                    : 'text-zinc-500 hover:text-zinc-900 hover:@dark:text-zinc-50'
                }`
              }
            >
              Marvel
            </NavLink>
          </li>
          <li className="px-4">
            <NavLink
              to="/dc"
              className={({ isActive }) =>
                `hover:underline ${
                  isActive
                    ? 'text-zinc-900 @dark:text-zinc-50 underline'
                    : 'text-zinc-500 hover:text-zinc-900 hover:@dark:text-zinc-50'
                }`
              }
            >
              DC
            </NavLink>
          </li>
          <li className="px-4 flex items-center gap-1">
            <div className="i-material-symbols:search text-base" />
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `hover:underline ${
                  isActive
                    ? 'text-zinc-900 @dark:text-zinc-50 underline'
                    : 'text-zinc-500 hover:text-zinc-900 hover:@dark:text-zinc-50'
                }`
              }
            >
              Search
            </NavLink>
          </li>
        </ul>
      </nav>

      {authState.isLoggedIn && (
        <div className="flex gap-3 mx-auto">
          <section className="flex gap-1 items-center">
            <div className="i-material-symbols:account-circle text-2xl" />
            <span>{authState.user.name}</span>
          </section>
          <button
            onClick={handleLogOut}
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1 text-center @dark:border-gray-600 @dark:text-gray-400 @dark:hover:text-white @dark:hover:bg-gray-600 @dark:focus:ring-gray-800"
          >
            Log Out
          </button>
        </div>
      )}
    </header>
  )
}
