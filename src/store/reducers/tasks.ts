import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utility/enums/Task'

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Study Javascript',
      enums.Priority.IMPORTANT,
      enums.Status.PENDING,
      '',
      1
    ),
    new Task(
      'Study guitar tabs',
      enums.Priority.NORMAL,
      enums.Status.DONE,
      'Search UltimateGuitarTabs.com',
      2
    ),
    new Task(
      'Pay rent',
      enums.Priority.URGENT,
      enums.Status.PENDING,
      'Pay before friday',
      3
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = taskSlice.actions

export default taskSlice.reducer
