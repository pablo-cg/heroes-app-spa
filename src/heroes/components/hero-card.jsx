import { Link } from 'react-router-dom'

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const filteredCharacters = characters
    ?.split(',')
    .filter((char) => char !== alter_ego)

  const charactersList = filteredCharacters.join(',')

  return (
    <div className="grid grid-cols-12 gap-2 border @dark:border-zinc-8 rounded-md animate-fade-in-right animate-duration-200">
      <div className="col-span-4">
        <img
          className="rounded-l-[0.375rem]  object-cover"
          src={`/heroes/${id}.jpg`}
          alt={superhero}
        />
      </div>

      <div className="col-span-8 p-4 flex flex-col justify-between gap-3">
        <section>
          <h1 className="text-xl font-semibold">{superhero}</h1>
          <h2>{alter_ego}</h2>
          <span className="opacity-50">{first_appearance}</span>
        </section>

        <section className="flex-1">
          <p className="font-light text-sm sm:text-base">{charactersList}</p>
        </section>

        <section className='self-end'>
          <Link
            className="max-w-34 flex items-center justify-between gap-2 px-4 py-2 shadow-md @dark:shadow-zinc-7/80 border rounded-md hover:border-zinc-3 hover:bg-zinc-3 @dark:hover:text-zinc-9 active:shadow-none"
            to={`/hero/${id}`}
          >
            <span className="block">More Info</span>
            <div className="i-material-symbols:arrow-forward-rounded" />
          </Link>
        </section>
      </div>
    </div>
  )
}
