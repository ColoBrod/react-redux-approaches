/**
 * This 'store' is not actually a store. It's just an object that looks similar
 * to store.
 * 
 * In this case 'next' is a reference to reducer function
 * 
 * If we don't execute 'next' function we won't reach our reducer function.
 * 
 * We can memoriza order of parameters like SNA (kinda DNA)
 * 
 * We can parametirize our function by adding:
 * const store => param => store => next => action => { ... }
 */

const logger = store => next => action => {
  console.log('store', store);
  console.log('next', next);
  console.log('action', action);
  next(action);
}

export default logger;