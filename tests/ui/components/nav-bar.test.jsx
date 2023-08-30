import { render, screen, fireEvent } from '@testing-library/react'
import { AuthContext } from '../../../src/auth/context/auth-context'
import { NavBar } from '../../../src/ui/components'
import { MemoryRouter, useNavigate } from 'react-router-dom'

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
  }
})

describe('<NavBar /> Tests', () => {
  const contextMock = {
    authState: {
      isLoggedIn: true,
      user: {
        name: 'Test User',
      },
    },
    logout: jest.fn(),
  }

  beforeEach(() => jest.clearAllMocks())

  test('debe mostrar el nombre del usuario autenticado', () => {
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextMock}>
          <NavBar />
        </AuthContext.Provider>
      </MemoryRouter>
    )

    expect(screen.getByText('Test User')).toBeTruthy()
  })

  test('debe llamar a la funcion logout y navegar al <LoginPage /> al presionar el boton', () => {
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextMock}>
          <NavBar />
        </AuthContext.Provider>
      </MemoryRouter>
    )

    const logoutBtn = screen.getByRole('button')

    fireEvent.click(logoutBtn)

    expect(contextMock.logout).toHaveBeenCalled()
    expect(mockUseNavigate).toHaveBeenCalledWith('/login', { replace: true })
  })
})
