import { useContext } from 'react'
import { AuthContext } from '../auth/context'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AuthContext)

  const { pathname, search } = useLocation()

  const lastLocation = pathname + search

  localStorage.setItem('last-location', lastLocation)

  return authState.isLoggedIn ? children : <Navigate to="/login" />
}
