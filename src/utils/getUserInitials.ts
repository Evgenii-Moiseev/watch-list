export function getUserInitials(name: string, surname: string) {
  const initials =
    name.charAt(0).toUpperCase() + surname.charAt(0).toUpperCase()

  return initials
}
