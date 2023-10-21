import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {
    id: 1,
    title: 'Project 1',
  },
  {
    id: 2,
    title: 'Project 2',
  },
  {
    id: 3,
    title: 'Project 3',
  },
];
let lastId = initialState.length;

const slice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    added: (projects, action) => {
      const { title } = action.payload;
      projects.push({ id: ++lastId, title });
    },
    removed: (projects, action) => {
      const { id } = action.payload;
      const index = projects.findIndex(project => project.id === id);
      projects.splice(index, 1);
    },
  }
});

export const { added, removed } = slice.actions;
export default slice.reducer;