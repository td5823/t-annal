import React, { useEffect } from 'react'
import qs from 'qs'
// import { useMount } from 'ahooks'

import { Layout } from 'antd'

import styled from 'styled-components'


const NewLayout = styled(Layout)`
  height: 100%;
  overflow: auto;
  background-color: #fff;
`

// 埋点地址
const TRACK_URL = '//logger.qince.com/track/logger.gif'

const Page = (props) => {
  const { queryParams, children, ...others } = props

  // 只在组件初始化时执行
  useEffect(() => {
    // 有埋点id才记录埋点
    if (queryParams?.hasOwnProperty('trackId')) {
      const image = new Image(1, 1)
      image.src = `${TRACK_URL}?${qs.stringify(queryParams)}`
    }
  })

  return (
    <NewLayout {...others}>
      {children}
    </NewLayout>
  )
}

export default Page
