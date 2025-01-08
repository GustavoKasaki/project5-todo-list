import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utility/enums/Task'

type TaskState = {
  items: Task[]
}

const initialState: TaskState = {
  items: [
    {
      id: 1,
      title: 'Study Javascript',
      description: '',
      priority: enums.Priority.IMPORTANT,
      status: enums.Status.PENDING
    },
    {
      id: 2,
      title: 'Study guitar tabs',
      description: 'Search UltimateGuitarTabs.com',
      priority: enums.Priority.NORMAL,
      status: enums.Status.DONE
    },
    {
      id: 3,
      title: 'Pay rent',
      description: 'Pay before friday',
      priority: enums.Priority.URGENT,
      status: enums.Status.PENDING
    }
  ]
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = taskSlice.actions

export default taskSlice.reducer
