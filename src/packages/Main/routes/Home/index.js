
import { lazy } from 'react'

const HomeIndex = lazy(() => import('../../Home'))

const Home = {
  path: 'home',
  element: <HomeIndex />
}

export default Home