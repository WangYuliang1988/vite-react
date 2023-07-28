import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

// 创建指定 state 类型的 useAppSelector 以替代 useSelector，避免 TypeScript 中每次调用 useSelector((state) => {}) 时都得指定 state 类型。
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// 创建返回值类型为 AppDispatch 的 useAppDispatch 以替代 useDispatch，在 TypeScript 中直接调用 useAppDispatch() 即可得到支持 thunk function 的 dispatch。
export const useAppDispatch: () => AppDispatch = useDispatch
