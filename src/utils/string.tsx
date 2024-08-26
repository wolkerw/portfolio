export const camelizeString = (stringToCamelize: string) => {
  return stringToCamelize
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
}
