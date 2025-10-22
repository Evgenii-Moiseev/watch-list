function formatAmount(amount) {
    return Number(amount).toLocaleString('ru-RU').toString();
}
export function getAmount(languageCode, amount) {
    const moneyAmount = languageCode === 'ru'
        ? `${formatAmount(amount)} руб.`
        : `${formatAmount(amount)} $`;
    return moneyAmount;
}
