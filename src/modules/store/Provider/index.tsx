import React, { createContext, ReactNode } from 'react'

export const ReduxContext = createContext<undefined>(undefined)

interface ProviderProps {
  store: any
  children: ReactNode
}

function Provider({ store, children }: ProviderProps): JSX.Element {
  // 使用传入的 context 或默认的 ReduxContext

  return <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
}

export default Provider
