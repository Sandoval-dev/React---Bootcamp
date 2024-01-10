import { configureStore } from '@reduxjs/toolkit'
import modelSlice from './modelSlice'

export const store = configureStore({
  reducer: {
    module:modelSlice
  }
  ,
})