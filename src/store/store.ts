import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

/**
 * Store 是一个普通的 JavaScript 对象，用来将 state、action、reducer 联系在一起，并承担以下职则：
 *
 *   1. 维护应用的 state；
 *   2. 提供 getState() 方法获取 state；
 *   3. 提供 dispatch(action) 方法更新 state；
 *   4. 通过 subscribe(listener) 注册监听器，当 state 发生变化时执行 listener；
 *   5. 通过 subscribe(listener) 返回的函数注销监听器。
 *
 * Redux 应用只有一个唯一的 State 对象，这个 State 对象只存在于唯一的 Store 中。
 */
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export default store

// 获取 store 中包含的 state 和 dispatch 类型信息，分别命名为 RootState 和 AppDispatch 并导出。

// RootState 可用于在调用 useSelector 时指定 state 的类型，如：useSelector((state: RootState) => state.counter.value)，以支持 TypeScript。
export type RootState = ReturnType<typeof store.getState>

// AppDispatch 可用于指定 useDispatch() 函数返回的 dispatch 的类型，如：const dispatch: AppDispatch = useDispatch()。
// 因为 Redux Toolkit 库的 configureStore() 默认启用 redux-thunk，所以 AppDispatch 类型是 ThunkDispatch & Dispatch 类型。
// 进而，在使用 TypeScript 时，可以通过指定 useDispatch() 返回的 dispatch 的类型是 AppDispatch，以支持 dispatch thunk function。
export type AppDispatch = typeof store.dispatch
