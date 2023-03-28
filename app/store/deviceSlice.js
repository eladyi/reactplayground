import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  deviceId:''
}

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setDeviceId: (state, action)=> {
      state.deviceId = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setDeviceId } = deviceSlice.actions

export default deviceSlice.reducer