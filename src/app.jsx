import { AppRouter } from './router/app-router'
import { AuthProvider } from './auth/context'

export const App = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}
