import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigation = [
  { label: 'Overview', path: '/' },
  { label: 'Activities', path: '/activities' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'Teams', path: '/teams' },
  { label: 'Users', path: '/users' },
  { label: 'Workouts', path: '/workouts' },
]

function Overview() {
  return (
    <section className="overview-page">
      <div className="eyebrow">Mergington High School / 2026 season</div>
      <h1>Move together.<br /><span>Go further.</span></h1>
      <p className="lead-copy">A clear view of your community&apos;s momentum, from first steps to friendly competition.</p>
      <div className="overview-grid">
        <NavLink className="overview-tile tile-coral" to="/activities"><span className="tile-number">01</span><strong>Log activity</strong><span>See the latest movement</span></NavLink>
        <NavLink className="overview-tile tile-yellow" to="/leaderboard"><span className="tile-number">02</span><strong>Check the board</strong><span>Celebrate every effort</span></NavLink>
        <NavLink className="overview-tile tile-mint" to="/workouts"><span className="tile-number">03</span><strong>Find a workout</strong><span>Build your next session</span></NavLink>
      </div>
    </section>
  )
}

function App() {
  const location = useLocation()
  const currentPage = navigation.find((item) => item.path === location.pathname)?.label || 'OctoFit Tracker'

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <NavLink className="brand" to="/" aria-label="OctoFit Tracker home"><span className="brand-mark">O</span><span>OctoFit<br /><em>Tracker</em></span></NavLink>
        <div className="sidebar-label">Explore</div>
        <nav className="main-nav" aria-label="Primary navigation">
          {navigation.map((item) => <NavLink key={item.path} to={item.path} end={item.path === '/'} className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}><span className="nav-dot" />{item.label}</NavLink>)}
        </nav>
        <div className="sidebar-footer">Spring challenge<br /><strong>Day 24 / 42</strong></div>
      </aside>
      <main className="main-content">
        <header className="topbar"><span className="mobile-brand">OctoFit / {currentPage}</span><span className="status-dot" /> API connected</header>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
