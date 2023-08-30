import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages'
import { HeroesRoutes } from '../heroes/routes'
import { PrivateRoute } from './private-route'
import { PublicRoute } from './public-route'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}
