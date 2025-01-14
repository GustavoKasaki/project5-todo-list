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
    },
    edit: (state, action: PayloadAction<Task>) => {
      const taskIndex = state.items.findIndex((t) => t.id === action.payload.id)

      if (taskIndex >= 0) {
        state.items[taskIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Task>) => {
      const taskExists = state.items.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (taskExists) {
        alert('This task already exists!')
      } else {
        state.items.push(action.payload)
      }
    }
  }
})

export const { remove, edit, register } = taskSlice.actions

export default taskSlice.reducer
