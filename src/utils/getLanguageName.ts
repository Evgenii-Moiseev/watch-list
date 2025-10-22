export function getLanguageName(languageCode: string): string {
  const displayLanguageName = new Intl.DisplayNames(['ru-RU'], {
    type: 'language',
  })
  const language = displayLanguageName.of(languageCode)

  if (language) {
    const languageName = language.charAt(0).toUpperCase() + language.slice(1)

    return languageName
  }

  return languageCode
}
