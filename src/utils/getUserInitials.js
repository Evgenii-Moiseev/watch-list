export function getUserInitials(name, surname) {
    const initials = name.charAt(0).toUpperCase() + surname.charAt(0).toUpperCase();
    return initials;
}
