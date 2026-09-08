import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'
import { ErrorState, LoadingState } from './CollectionState.jsx'

function Teams() {
  const [teams, setTeams] = useState([]); const [error, setError] = useState('')
  useEffect(() => { fetchCollection('teams', 'teams').then(setTeams).catch((issue) => setError(issue.message)) }, [])
  return <><PageHeading title="Teams" intro="Small groups, shared goals, real momentum." />{error ? <ErrorState message={error} /> : teams.length === 0 ? <LoadingState /> : <div className="card-grid">{teams.map((team) => <article className="feature-card" key={team._id || team.name}><span className="card-kicker">Team</span><h2>{team.name}</h2><p>Captain: {team.captainEmail}</p><div className="card-footer"><span>{team.memberEmails?.length || 0} members</span><strong>{team.weeklyGoalMinutes} min / week</strong></div></article>)}</div>}</>
}
function PageHeading({ title, intro }) { return <div className="page-heading"><div className="eyebrow">Find your people</div><h1>{title}</h1><p>{intro}</p></div> }
export default Teams