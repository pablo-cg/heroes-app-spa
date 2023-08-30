import { useContext } from 'react'
import { AuthContext } from '../auth/context'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children }) => {
  const { authState } = useContext(AuthContext)
  return !authState.isLoggedIn ? children : <Navigate to="/" />
}
