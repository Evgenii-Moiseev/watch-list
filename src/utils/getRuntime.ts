export function getRuntime(minutes: number): string {
  let runTime

  if (minutes < 60) {
    runTime = `${minutes} мин`
  } else {
    runTime = `${Math.floor(minutes / 60)} ч ${minutes % 60} мин`
  }

  return runTime
}
