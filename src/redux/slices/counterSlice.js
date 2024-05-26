import { createSlice } from '@reduxjs/toolkit'
<<<<<<< HEAD
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
=======

const initialState = {
>>>>>>> 7529782 (init project)
  value: 0,
}

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
<<<<<<< HEAD
    incrementByAmount: (state, action: PayloadAction<number>) => {
=======
    incrementByAmount: (state, action) => {
>>>>>>> 7529782 (init project)
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer