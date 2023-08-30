import { HeroList } from '../components'

export const DcPage = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-5">DC Comics</h1>
      <HeroList publisher="DC Comics" />
    </>
  )
}
