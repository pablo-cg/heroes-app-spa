import { useReducer } from 'react'
import { AuthContext } from './auth-context'
import { authReducer } from './auth-reducer'
import { types } from '../types/types'

function initState() {
  const user = JSON.parse(localStorage.getItem('user'))

  return {
    isLoggedIn: !!user,
    user,
  }
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, initState)

  function login(name = '') {
    const user = {
      id: '1',
      name,
    }

    const action = {
      type: types.login,
      payload: user,
    }

    localStorage.setItem('user', JSON.stringify(user))

    dispatch(action)
  }

  function logout() {
    localStorage.removeItem('user')

    const action = {
      type: types.logout,
    }

    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
