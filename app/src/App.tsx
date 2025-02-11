import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing'
import { ModeToggle } from './components/mode-toggle'

function App() {
  return (
    <Router>
      <div className="relative">
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App