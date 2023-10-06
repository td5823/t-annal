const BASE = "Visit";

const CHANGE_STATE = `${BASE}/CHANGE_STATE`;

// 定义应用程序状态的数据类型
interface State {
  tradeType: string;
}

// 定义操作状态的动作类型
type Action = {
  type: string;
  payload: any;
};

const initial: State = {
  tradeType: "3",
};

// Reducer函数，用于处理状态更新
export default function reducer(state = initial, action: Action): State {
  switch (action.type) {
    case CHANGE_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

// 修改initialState
export const dispatchChangeState = (params: object): object => {
  return {
    type: CHANGE_STATE,
    payload: params || {},
  };
};
