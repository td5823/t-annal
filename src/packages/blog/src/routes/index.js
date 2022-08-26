import { useRoutes } from 'react-router-dom'

// 主界面
import BlogHomeIndex from '@blog'

// 文章模块
import Article from '@blog/routes/Article'

// 主界面
const HomeIndex =
{
  path: '*',
  element: <BlogHomeIndex />,
  children: [
    // 文章模块
    ...Article
  ]
}
const Main = () => {
  return useRoutes([
    // 主界面
    HomeIndex,
  ])
}

export default Main