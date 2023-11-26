export function getInitials(firstname: string, lastname: string) {
  return (firstname.charAt(0) + lastname.charAt(0)).toUpperCase();
}
