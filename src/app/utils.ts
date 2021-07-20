type NavItemSetup = {
    name: string,
    icon: string,
    goTo: Function
}

export const createNavItem = ({
  name,
  icon,
  goTo
}: NavItemSetup) => ({
  icon,
  name,
  onClick: () => goTo(`/${name.toLowerCase()}}`),
  path: `/${name.toLowerCase()}`
})
