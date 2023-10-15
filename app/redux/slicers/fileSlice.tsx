import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  fileLink: ''
}

const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setFileLink(state, action: PayloadAction<string>) {
      state.fileLink = action.payload
    }
  }
})

export const { setFileLink } = fileSlice.actions

export default fileSlice.reducer
