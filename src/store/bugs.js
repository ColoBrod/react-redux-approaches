/**
 * Here we separate reducer from actions. But we can also create them with
 * createSlice function in one go.
 * 
 * I can take a look at 'projects' for this implementation.
 */

import { createAction, createReducer } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// Action types
const BUG_ADDED = 'BUG_ADDED';
const BUG_RESOLVED = 'BUG_RESOLVED';
const BUG_REMOVED = 'BUG_REMOVED';
const BUG_ASSIGNED = 'BUG_ASSIGNED';

// Action creators (actions)
export const bugAdded = createAction(BUG_ADDED);
export const bugResolved = createAction(BUG_RESOLVED);
export const bugRemoved = createAction(BUG_REMOVED);
export const bugAssigned = createAction(BUG_ASSIGNED);

/**
 * The state in value callback funtion is essentially a draftState, a proxy.
 * So createReducer from @reduxjs/toolkit uses immer under the hood.
 * ---
 * It uses 
 *   produce(initialState, draftState => ... )
 * 
 * and this 'draftState' is named 'state'
 * ---
 */

// Reducer
let lastId = 0;

export default createReducer([], {
  [BUG_ADDED]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false
    });
  },
  [BUG_RESOLVED]: (bugs, action) => {
    const bug = bugs.find(bug => bug.id === action.payload.id);
    bug.resolved = true;
  },
  [BUG_REMOVED]: (bugs, action) => {
    const index = bugs.findIndex(bug => bug.id === action.payload.id);
    bugs.splice(index, 1);
  },
  [BUG_ASSIGNED]: (bugs, action) => {
    const { id, userId } = action.payload;
    const bug = bugs.find(bug => bug.id === id);
    Object.assign(bug, { userId });
  },
});

/**
 * Selectors
 * Allows us to prevent code duplication in our components.
 */
// export const getUnresolvedBugs = state => 
//   state.entities.bugs.filter(bug => !bug.resolved);

/**
 * Memoization - 'reselect' library (looks like it is a part of Redux-Toolkit)
 * Solves the problem with selectors. Allows us to cache result.
 * 
 * This implementation always returns the same Object | Array, so our components
 * won't be rerendered.
 * 
 * In this example we can use alternative names 'unresolvedBugsSelector' or ...
 */
// export const getBugs = createSelector(
//   state => state.entities.bugs,
//   bugs => bugs
// );

export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => bug.resolved === false)
);

export const getBugsByUserId = userId => createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => bug.userId === userId)
);

/**
 * We can also get multiple entites and pass them to our filter function:
 * 
 * export const getUnresolvedBugs = createSelector(
 *   state => state.entities.bugs,
 *   state => state.entities.projects,
 *   (bugs, projects) => bugs, filter(bug => bug.resolved === false)
 * )
 */


