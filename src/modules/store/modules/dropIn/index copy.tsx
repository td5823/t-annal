import React, { createContext, useContext, useReducer } from "react";

const BASE = "Visit";

const CHANGE_STATE = `${BASE}/CHANGE_STATE`;

// 定义上下文的数据类型
interface ContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

// 定义应用程序状态的数据类型
interface State {
  count: number;
}

// 定义操作状态的动作类型
type Action = {
  type: string;
  params: object;
};

type ProviderType = {
  children: any;
};

// 初始状态
const initialState: State = {
  count: 0,
};

// 创建上下文
export const Context = createContext<ContextType | undefined>(undefined);

// 创建自定义的Provider组件
export const Provider: React.FC<ProviderType> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

// Reducer函数，用于处理状态更新
export default function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case CHANGE_STATE:
      return { ...state, ...action.params };
    default:
      return state;
  }
}

// 自定义钩子，用于访问上下文
export const _useContext = (): any => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useContext must be used within a Provider");
  }
  return context;
};

// 修改initialState
export const dispatchChangeState = (params: object): any => {
  const { dispatch } = _useContext();
  dispatch({
    type: CHANGE_STATE,
    params: params || {},
  });
};
