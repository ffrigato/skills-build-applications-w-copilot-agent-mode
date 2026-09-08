import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'
import { ErrorState, LoadingState } from './CollectionState.jsx'

const usersApiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users`
  : 'http://localhost:8000/api/users'

function Users() {
  const [users, setUsers] = useState([]); const [error, setError] = useState('')
  useEffect(() => { fetchCollection('users', 'users').then(setUsers).catch((issue) => setError(issue.message)) }, [])
  return <><PageHeading title="Users" intro="The people making every minute count." />{error ? <ErrorState message={`${error} Endpoint: ${usersApiEndpoint}`} /> : users.length === 0 ? <LoadingState /> : <div className="data-list">{users.map((user) => <article className="data-row" key={user._id || user.email}><div className="user-cell"><div className="avatar">{user.name?.split(' ').map((part) => part[0]).join('')}</div><div><strong>{user.name}</strong><span>{user.email}</span></div></div><span className="pill">{user.fitnessLevel}</span><span className="muted-text">{user.teamName}</span></article>)}</div>}</>
}
function PageHeading({ title, intro }) { return <div className="page-heading"><div className="eyebrow">Your community</div><h1>{title}</h1><p>{intro}</p></div> }
export default Users