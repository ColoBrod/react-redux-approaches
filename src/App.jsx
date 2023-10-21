import React, { useState } from 'react';
import Projects from '~/component/Projects';
import { useSelector, useDispatch, useStore } from 'react-redux';
import {
  bugAdded,
  bugResolved,
  bugRemoved,
  bugAssigned,
  getUnresolvedBugs
} from '~/store/bugs';
import {
  userAdded
} from '~/store/users';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.entities.users);
  const bugs = useSelector(state => state.entities.bugs);

  return (
    <>
      <h1>Hello, Redux</h1>
      <h2>Users:</h2>
      <ul>
        {
          users.map(user => <li key={user.id}>{user.name}</li>)
        }
      </ul>
      <button onClick={() => dispatch(userAdded({ name: "RxJS" }))}>Add a user</button>
      <h2>Bugs:</h2>
      <ul>
        {
          bugs.map(bug => <li key={bug.id}>{bug.id} - {bug.description}</li>)
        }
      </ul>
      <button onClick={() => dispatch(bugAdded({ description: "New bug" }))}>Click ME</button>
      <Projects />
    </>
  );
}

export default App;