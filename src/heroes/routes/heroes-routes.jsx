import { Routes, Route, Navigate } from 'react-router-dom'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'
import { NavBar } from '../../ui/components'

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />

      <main className="container w-11/12 mx-auto my-4">
        <Routes>
          <Route
            path="marvel"
            element={<MarvelPage />}
          />
          <Route
            path="dc"
            element={<DcPage />}
          />
          <Route
            path="search"
            element={<SearchPage />}
          />
          <Route
            path="hero/:id"
            element={<HeroPage />}
          />
          <Route
            path="/"
            element={<Navigate to="/marvel" />}
          />
        </Routes>
      </main>
    </>
  )
}
