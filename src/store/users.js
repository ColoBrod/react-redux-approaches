import { createSlice } from "@reduxjs/toolkit"

const initialState = [
  {
    id: 1,
    name: "ColoBrod",
  },
  {
    id: 2,
    name: "Buxan",
  },
  {
    id: 3,
    name: "Nuenid",
  },
  {
    id: 4,
    name: "Kozia",
  },
  {
    id: 5,
    name: "Vspishka",
  },
]
let lastId = initialState.length;

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded: (users, action) => {
      const { name } = action.payload;
      users.push({ id: ++lastId, name });
    },
  }
});

export const { userAdded } = slice.actions;
export default slice.reducer;