import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './hero-card'

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          {...hero}
        />
      ))}
    </section>
  )
}
