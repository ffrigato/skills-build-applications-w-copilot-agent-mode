const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export const apiUrl = apiBaseUrl

export function responseItems(payload, key) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.[key])) return payload[key]
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.items)) return payload.items
  if (Array.isArray(payload?.data?.items)) return payload.data.items
  return []
}

export async function fetchCollection(path, key) {
  const response = await fetch(`${apiBaseUrl}/${path}/`)
  if (!response.ok) throw new Error(`Unable to load ${path} (${response.status})`)
  return responseItems(await response.json(), key)
}