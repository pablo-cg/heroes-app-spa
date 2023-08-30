import { authReducer } from '../../../src/auth/context/auth-reducer'
import { types } from '../../../src/auth/types/types'

describe('auth-reducer Tests', () => {
  const initialState = {
    isLoggedIn: false,
    user: null,
  }

  const testUser = {
    id: 1,
    name: 'Test User',
  }

  test('Debe retornar el estado por defecto', () => {
    const newState = authReducer(initialState, {})

    expect(newState).toBe(initialState)
  })

  test('Debe llamar al login y establecer el usuario', () => {
    const action = {
      type: types.login,
      payload: testUser,
    }

    const newState = authReducer(initialState, action)

    expect(newState.user).toBe(testUser)
  })

  test('Debe llamar al logout y eliminar el usuario', () => {
    const loggedState = {
      isLoggedIn: true,
      user: testUser,
    }

    const action = {
      type: types.logout,
    }

    const newState = authReducer(loggedState, action)

    expect(newState).toEqual({ isLoggedIn: false })
  })
})
