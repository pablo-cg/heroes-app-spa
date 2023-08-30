import { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroById } from '../helpers'

export const HeroPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const hero = useMemo(() => getHeroById(id), [id])

  if (!hero) return <Navigate to="/" />

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <div className="grid grid-cols-12 my-5 gap-2 animate-fade-in-left animate-duration-200">
      <div className="col-span-4">
        <img
          className="p-1 border @dark:border-zinc-8 rounded max-w-full h-auto"
          src={`/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
        />
      </div>
      <div className="col-span-8">
        <h1 className="text-3xl font-semibold mb-5">{hero.superhero}</h1>
        <ul className="mb-5">
          <li>
            <strong>Alter Ego: </strong>
            {hero.alter_ego}
          </li>
          <li>
            <strong>Publisher: </strong>
            {hero.publisher}
          </li>
          <li>
            <strong>First Appearance: </strong>
            {hero.first_appearance}
          </li>
        </ul>
        <section className="flex flex-col gap-3 mb-5">
          <h1 className="text-2xl font-semibold">Characters</h1>
          <p>{hero.characters}</p>
        </section>

        <button
          className="flex items-center justify-between gap-2 px-4 py-2 shadow-md @dark:shadow-zinc-7/80 border rounded-md hover:border-zinc-3 hover:bg-zinc-3 @dark:hover:text-zinc-9 active:shadow-none"
          onClick={handleGoBack}
        >
          <div className="i-material-symbols:arrow-back-rounded" />
          <span className="block">Go Back</span>
        </button>
      </div>
    </div>
  )
}
