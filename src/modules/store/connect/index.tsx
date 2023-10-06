import React, { useEffect, useState, useContext } from 'react'

import { ReduxContext } from '../Provider'

// connect 函数接受一个 mapStateToProps 函数和一个 mapDispatchToProps 函数
function connect(mapStateToProps: (state: any) => any, mapDispatchToProps: any) {
  return function (WrappedComponent: React.ComponentType<any>) {
    return function (props: any) {
      const store: any = useContext(ReduxContext)
      const [state, setState] = useState(mapStateToProps(store.getState()))
      // 订阅 Redux 的状态变化
      useEffect(() => {
        const unsubscribe = store.subscribe(() => {
          setState(mapStateToProps(store.getState()))
        })

        // 清除订阅
        return () => {
          unsubscribe()
        }
      }, [store]) // eslint-disable-line

      const mapDispatchToPropsObj = {}
      for (const key in mapDispatchToProps) {
        if (key !== 'default') {
          mapDispatchToPropsObj[key] = (params) => {
            store.dispatch(mapDispatchToProps[key](params))
          }
        }
      }
      return <WrappedComponent {...props} {...state} {...mapDispatchToPropsObj} />
    }
  }
}

export default connect
