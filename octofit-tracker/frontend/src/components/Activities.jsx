import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'
import { ErrorState, LoadingState } from './CollectionState.jsx'

const activitiesApiEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities`
  : 'http://localhost:8000/api/activities'

function Activities() {
  const [activities, setActivities] = useState([])
  const [state, setState] = useState({ loading: true, error: '' })

  useEffect(() => { fetchCollection('activities', 'activities').then((data) => { setActivities(data); setState({ loading: false, error: '' }) }).catch((error) => setState({ loading: false, error: error.message })) }, [])
  if (state.loading) return <><PageHeading title="Activities" intro="The latest movement across your community." /><LoadingState /></>
  if (state.error) return <><PageHeading title="Activities" intro="The latest movement across your community." /><ErrorState message={`${state.error} Endpoint: ${activitiesApiEndpoint}`} /></>
  return <><PageHeading title="Activities" intro="The latest movement across your community." /><div className="data-list">{activities.map((activity, index) => <article className="data-row" key={activity._id || `${activity.userEmail}-${index}`}><div><strong>{activity.type}</strong><span>{activity.userEmail}</span></div><div className="row-stat">{activity.durationMinutes} <small>min</small></div><div className="row-stat accent-text">{activity.caloriesBurned} <small>kcal</small></div></article>)}</div></>
}

function PageHeading({ title, intro }) { return <div className="page-heading"><div className="eyebrow">Community pulse</div><h1>{title}</h1><p>{intro}</p></div> }
export default Activities