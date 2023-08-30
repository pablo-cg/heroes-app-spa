import { render, screen } from '@testing-library/react'
import { PrivateRoute } from '../../src/router/private-route'
import { AuthContext } from '../../src/auth/context'
import { MemoryRouter } from 'react-router-dom'

describe('<PrivateRoute /> Tests', () => {
  test('debe mostrar el children si está autenticado', () => {
    Storage.prototype.setItem = jest.fn()

    const contextMock = {
      authState: {
        isLoggedIn: true,
        user: {
          id: 0,
          name: 'Test user name',
        },
      },
    }

    render(
      <AuthContext.Provider value={contextMock}>
        <MemoryRouter initialEntries={['/dc']}>
          <PrivateRoute>
            <h1>Private Route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Private Route')).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith('last-location', '/dc')
  })
})
