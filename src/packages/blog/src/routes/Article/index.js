
import { lazy } from 'react'

// 文章
const Article = lazy(() => import('@blog/pages//Article'))

const ArticleUseRoutes = [{
  path: 'article/*',
  element: <Article />,
  children: [
  ]
}]

export default ArticleUseRoutes