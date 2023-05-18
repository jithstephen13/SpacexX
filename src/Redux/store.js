import { configureStore } from '@reduxjs/toolkit'
import CapsuleReducer from "./Data.slice"


export default configureStore({
  reducer: {
    capsule:CapsuleReducer,
   
  },
})