import { render, screen } from '@testing-library/react'
import { AppRouter } from '../../src/router/app-router'
import { AuthContext } from '../../src/auth/context'
import { MemoryRouter } from 'react-router-dom'

describe('<AppRouter /> Tests', () => {
  test('debe mostrar <LoginPage /> si no está autenticado', () => {
    const contextMock = {
      authState: {
        isLoggedIn: false,
      },
    }

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextMock}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getByText('Login')).toBeTruthy()
  })

  test('debe mostrar <MarvelPage /> si está autenticado', () => {
    const contextMock = {
      authState: {
        isLoggedIn: true,
        user: {
          id: 0,
          name: 'Test user',
        },
      },
    }

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextMock}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getByText('Marvel')).toBeTruthy()
  })
})
