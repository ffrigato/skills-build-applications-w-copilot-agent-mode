import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'
import { ErrorState, LoadingState } from './CollectionState.jsx'

function Workouts() {
  const [workouts, setWorkouts] = useState([]); const [error, setError] = useState('')
  useEffect(() => { fetchCollection('workouts', 'workouts').then(setWorkouts).catch((issue) => setError(issue.message)) }, [])
  return <><PageHeading title="Workouts" intro="A good session starts with a plan that fits." />{error ? <ErrorState message={error} /> : workouts.length === 0 ? <LoadingState /> : <div className="card-grid">{workouts.map((workout) => <article className="feature-card workout-card" key={workout._id || workout.title}><div className="workout-top"><span className="card-kicker">{workout.category}</span><span className="duration">{workout.durationMinutes} min</span></div><h2>{workout.title}</h2><p>{workout.description}</p><div className="card-footer"><span className="pill">{workout.difficulty}</span><strong>{workout.exercises?.length || 0} exercises</strong></div></article>)}</div>}</>
}
function PageHeading({ title, intro }) { return <div className="page-heading"><div className="eyebrow">Personalized guidance</div><h1>{title}</h1><p>{intro}</p></div> }
export default Workouts