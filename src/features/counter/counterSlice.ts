import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}

/**
 * 一个 slice 对应应用中某个独立功能涉及的 Redux 相关逻辑，并通常放在一个单独的文件中。
 *
 * slice 这个命名来源于将应用的 state 对象想象成一个整体，不同工程对应该整体 state 中不同的独立部分（slice）。
 *
 * action 是普通的 JavaScript 对象，用来描述如何更新 state，如：{ type: 'ADD_TODO', text: 'Swim' }。
 *
 * reducer 是普通的 JavaScript 函数，用来按照 action 的描述实现对 state 的更新。
 */
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

// 为每个 reducer 函数生成 action 创建函数（action 创建函数用于生成 action 对象）
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
