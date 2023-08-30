import { HeroList } from "../components"

export const MarvelPage = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-5">Marvel Comics</h1>
      <HeroList publisher="Marvel Comics" />
    </>
  )
}
