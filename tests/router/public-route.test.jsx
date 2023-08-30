import { render, screen } from '@testing-library/react'
import { PublicRoute } from '../../src/router/public-route'
import { AuthContext } from '../../src/auth/context'
import { MemoryRouter, Routes, Route } from 'react-router-dom'

describe('<PublicRoute /> Tests', () => {
  test('debe mostrar el children si no está autenticado', () => {
    const contextMock = {
      authState: {
        isLoggedIn: false,
      },
    }

    render(
      <AuthContext.Provider value={contextMock}>
        <PublicRoute>
          <h1>Public Route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Public Route')).toBeTruthy()
  })

  test('debe navegar está autenticado', () => {
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
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Public Route</h1>
                </PublicRoute>
              }
            />
            <Route
              path="/"
              element={<h1>Authenticated Test Page</h1>}
            />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Authenticated Test Page')).toBeTruthy()
  })
})
