import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react'

const StudentsList = lazy(() => import('./components/StudentsList'))
const GradesList = lazy(() => import('./components/GradesList'))

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div className="spinner">🔄 Cargando...</div>}>
          <Routes>
            <Route path="/" element={<StudentsList />} />
            <Route path="/student/:studentId" element={<GradesList />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
