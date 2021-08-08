import { createNavItem } from '../utils'
describe('src/app/utils', () => {
  it('createNavItem', () => {
    const result = createNavItem({
      name: 'name',
      icon: 'icon',
      goTo: 'path'
    })
    expect(JSON.stringify(result)).toEqual(JSON.stringify({ icon: 'icon', name: 'name', onClick: () => {}, path: '/name' }))
  })
})
