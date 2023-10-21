import configureStore from '~/store';
import { userAdded } from './store/users';
import { bugAdded, bugResolved, bugAssigned, getBugsByUserId } from './store/bugs';

const store = configureStore();

store.subscribe(() => console.log("update"))

store.dispatch(userAdded({
  name: "mrchrr"
}));
// store.dispatch(bugAdded({
//   description: "Bug 1"
// }));
// store.dispatch(bugAdded({
//   description: "Bug 2"
// }));
// store.dispatch(bugAdded({
//   description: "Bug 3"
// }));
// store.dispatch(bugAdded({
//   description: "Bug 4"
// }));
// store.dispatch(bugResolved({
//   id: 1
// }));

// store.dispatch(bugAssigned({
//   id: 1, userId: 6
// }));
// store.dispatch(bugAssigned({
//   id: 2, userId: 6
// }));

// console.log(getBugsByUserId(6)(store.getState()));

// console.log("Action description:");
// console.log(action.added({ title: 'Just project' }));

// store.dispatch(
//   action.added({
//     title: "Project 1",
//   })
// );
// store.dispatch(
//   action.added({
//     title: "Project 2",
//   })
// );
// store.dispatch(
//   action.added({
//     title: "Project 3",
//   })
// );
// store.dispatch(
//   action.added({
//     title: "Project 4",
//   })
// );
// store.dispatch(
//   action.removed({
//     id: 2,
//   })
// );

