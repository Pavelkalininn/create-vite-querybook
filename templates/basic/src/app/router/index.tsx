import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

export function Router() {
  const LazyHome = lazy(() =>
    import('@demo/pages/Home').then((module) => ({ default: module.Home })),
  )

  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path='/' element={<LazyHome />} />
      </Routes>
    </Suspense>
  )
}
