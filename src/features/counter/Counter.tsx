import { decrement, increment } from './counterSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

export function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <span>Use Redux: </span>
      <button onClick={() => dispatch(increment())}>Inc</button>
      <span>&nbsp;{count}&nbsp;</span>
      <button onClick={() => dispatch(decrement())}>Dec</button>
    </div>
  )
}
