import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'
import { ErrorState, LoadingState } from './CollectionState.jsx'

function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('leaderboard', 'leaderboard').then(setEntries).catch((issue) => setError(issue.message)) }, [])
  return <><PageHeading title="Leaderboard" intro="Consistency is a team sport. Here is this week&apos;s top three." />{error ? <ErrorState message={error} /> : entries.length === 0 ? <LoadingState /> : <div className="leaderboard-list">{entries.map((entry, index) => <article className={`leader-row rank-${entry.rank || index + 1}`} key={entry._id || entry.userEmail}><span className="rank">{String(entry.rank || index + 1).padStart(2, '0')}</span><div className="avatar">{entry.userName?.split(' ').map((part) => part[0]).join('')}</div><div className="leader-name"><strong>{entry.userName}</strong><span>{entry.totalCalories} calories burned</span></div><strong className="leader-minutes">{entry.totalMinutes}<small> min</small></strong></article>)}</div>}</>
}
function PageHeading({ title, intro }) { return <div className="page-heading"><div className="eyebrow">Friendly competition</div><h1>{title}</h1><p>{intro}</p></div> }
export default Leaderboard