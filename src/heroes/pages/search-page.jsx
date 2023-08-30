import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { HeroCard } from '../components'
import { useForm } from '../../hooks'
import { AlertBox } from '../../ui/components/alert-box'
import { getHeroesByName } from '../../heroes/helpers'

export const SearchPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q: query = '' } = queryString.parse(location.search)

  const heroes = getHeroesByName(query)

  const { formState, onInputChange } = useForm({
    searchText: query,
  })

  function handleSearch(event) {
    event.preventDefault()

    if (!formState.searchText.trim()) return

    navigate(`?q=${formState.searchText}`)
  }

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-3">
        <section className="col-span-1 xl:col-span-5">
          <h1 className="text-2xl font-semibold">Search</h1>
          <hr />
          <form
            aria-label='search-form'
            className="flex flex-col"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              name="searchText"
              id="search-text"
              placeholder="Enter a name"
              className="w-full rounded px-3 py-1 my-3"
              autoComplete="off"
              onChange={onInputChange}
              value={formState.searchText}
            />
            <button
              type="submit"
              className="max-w-full flex items-center gap-1 self-end rounded-lg px-3 py-1 font-medium text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 @dark:border-gray-600 @dark:text-gray-400 @dark:hover:text-white @dark:hover:bg-gray-600 @dark:focus:ring-gray-800"
            >
              <div className="i-material-symbols:search" />
              <span>Search</span>
            </button>
          </form>
        </section>
        <section className="col-span-1 xl:col-span-7">
          <h1 className="text-2xl font-semibold">Results</h1>
          <hr className="mb-4" />
          <div className='flex flex-col gap-3'>
            {!query && (
              <AlertBox
                type="info"
                title="Hey!"
                message="Search for a Hero"
              />
            )}

            {query && !heroes.length && (
              <AlertBox
                type="error"
                title="Oops!"
                message="No Hero Found"
              />
            )}

            {heroes.map((hero) => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
