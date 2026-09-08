const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const browserHost = typeof window !== 'undefined' ? window.location.hostname : ''
const codespaceHost = browserHost.replace(/-5173(\.app\.github\.dev)$/, '-8000$1')
const inferredCodespaceUrl = codespaceHost !== browserHost && codespaceHost
  ? `https://${codespaceHost}`
  : ''
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : `${inferredCodespaceUrl || 'http://localhost:8000'}/api`

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
  const endpoint = `${apiBaseUrl}/${path}/`
  let response
  try {
    response = await fetch(endpoint)
  } catch {
    throw new Error(`Unable to reach the API at ${endpoint}`)
  }
  if (!response.ok) throw new Error(`Unable to load ${path} (${response.status})`)
  return responseItems(await response.json(), key)
}