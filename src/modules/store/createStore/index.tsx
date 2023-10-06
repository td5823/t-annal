// 定义状态类型
type State = any;

// 定义动作类型，包括类型 (type) 和可选的负载 (payload)
type Action = {
  type: string;
  payload?: any;
};

// 定义 reducer 类型，它接受状态和动作，并返回新状态
// eslint-disable-next-line no-unused-vars
type Reducer = (state: State, action: Action) => State;

// 定义监听器类型，它是一个函数
type Listener = () => void;

// 创建 Redux store 的函数
export default function createStore(reducer: Reducer): any {
  let state: State; // 内部状态，初始化为 undefined
  const listeners: Listener[] = []; // 存储监听器的数组

  // 获取当前状态的函数
  const getState = () => state;

  // 分发动作并更新状态的函数
  const dispatch = (action: any) => {
    state = reducer(state, action); // 使用 reducer 处理动作并更新状态
    listeners.forEach((listener) => listener()); // 通知所有监听器，状态已更新
  };

  // 注册监听器的函数
  const subscribe = (listener: Listener) => {
    listeners.push(listener); // 将监听器添加到数组中
    return () => {
      const index = listeners.indexOf(listener); // 找到监听器在数组中的索引
      if (index !== -1) {
        listeners.splice(index, 1); // 从数组中移除监听器
      }
    };
  };

  // 初始化状态，触发一个初始动作
  dispatch({ type: "@INIT" });

  // 返回包含 getState、dispatch 和 subscribe 方法的 store 对象
  return {
    getState, // 获取当前状态的方法
    dispatch, // 分发动作的方法
    subscribe, // 注册监听器的方法
  };
}
