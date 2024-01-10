import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  model: false,
}

export const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    modelOpenFunc: (state) => {
      state.model=!state.model
    },

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { modelOpenFunc } = modelSlice.actions

export default modelSlice.reducer