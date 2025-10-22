function formatAmount(amount: string): string {
  return Number(amount).toLocaleString('ru-RU').toString()
}

export function getAmount(languageCode: string, amount: string): string {
  const moneyAmount =
    languageCode === 'ru'
      ? `${formatAmount(amount)} руб.`
      : `${formatAmount(amount)} $`

  return moneyAmount
}
