import { useRoutes } from 'react-router-dom'

// 主界面
import Home from './Home'

const Main = () => {
  return useRoutes([
    // 主界面
    Home
  ])
}

export default Main