import { render, screen, fireEvent } from '@testing-library/react'
import { SearchPage } from '../../../src/heroes/pages/search-page'
import { MemoryRouter } from 'react-router-dom'

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
  }
})

beforeEach(() => jest.resetAllMocks())

describe('<SearchPage /> Tests', () => {
  test('debe mostrar <SearchPage /> con valores por defecto', () => {
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )

    expect(screen.getByText('Search for a Hero')).toBeTruthy()
  })

  test('debe mostrar a Batman y el input con el valor del query param', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchPage />
      </MemoryRouter>
    )

    const inputElement = screen.getByRole('textbox')
    const img = screen.getByRole('img')

    expect(inputElement.value).toBe('batman')
    expect(img.src).toContain('/heroes/dc-batman.jpg')
  })

  test('debe mostrar un error si no se muestra el heroe (test-hero)', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=test-hero']}>
        <SearchPage />
      </MemoryRouter>
    )

    expect(screen.getByText('No Hero Found')).toBeTruthy()
  })

  test('debe llamar al navigate al buscar un heroe (batman)', () => {
    const searchValue = 'batman'

    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchPage />
      </MemoryRouter>
    )

    const inputElement = screen.getByRole('textbox')
    const formElement = screen.getByRole('form', { name: 'search-form' })

    fireEvent.change(inputElement, { target: { value: searchValue } })
    fireEvent.submit(formElement)

    expect(mockUseNavigate).toHaveBeenCalledWith(`?q=${searchValue}`)
  })
})
