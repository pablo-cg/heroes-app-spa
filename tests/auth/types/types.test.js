import { types } from '../../../src/auth/types/types'

describe('types Tests', () => {
  // con typescript esto no es necesario
  test('debe regresar los types', () => {
    expect(types).toEqual({
      login: 'login',
      logout: 'logout',
    })
  })
})
