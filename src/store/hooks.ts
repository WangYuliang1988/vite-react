import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

// 创建指定 state 类型的 useAppSelector 以替代 useSelector，避免每次调用 useSelector 时都得指定 state 类型
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// 创建指定 dispatch 类型为 AppDispatch 的 useAppDispatch 以替代 useDispatch，避免每次通过 useDispatch() 生成实例时都得指定实例类型
export const useAppDispatch: () => AppDispatch = useDispatch
