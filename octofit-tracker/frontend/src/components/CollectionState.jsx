export function LoadingState() {
  return <div className="collection-state">Loading your community data...</div>
}

export function ErrorState({ message }) {
  return <div className="collection-state error-state">{message}. Check that the API is running on port 8000.</div>
}