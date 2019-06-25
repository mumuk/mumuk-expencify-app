import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});
const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});
const setCount = ({count}) => ({
  type: 'SET',
  count
});



const countReducer = (state = {count: 0, field: 'starting field'}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy,
        field: 'after increment'
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy,
        field: 'after decrement'
      };
    case 'RESET':
      return {
        count: 0,
        field: 'after reset to 0'
      };
    case 'SET':
      return {
        count: action.count,
        field: 'new setup'
      };
    default:
      return state
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState())
});

store.dispatch(incrementCount({incrementBy: 50}));
store.dispatch({type: 'INCREMENT', incrementBy: 5});
store.dispatch(incrementCount());
store.dispatch({type: 'RESET'});
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 50}));
store.dispatch(resetCount());
store.dispatch(setCount({count: 101}));




