import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './reducers/tasks'

const store = configureStore({
  reducer: {
    tasks: taskReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
