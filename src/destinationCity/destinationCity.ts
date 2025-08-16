export const validDestinationCity = (paths: string[][]): string => {
  const sourceCities = new Set(paths.map((path) => path[0]))
  const destinationCities = paths.map((path) => path[1])

  const lastCity = destinationCities.find((city) => !sourceCities.has(city)) ?? ''
  return lastCity
}
