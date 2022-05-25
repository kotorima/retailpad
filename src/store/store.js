import { createStore } from 'redux';
import reducers from './reducers/reducers';

const store = createStore(reducers);

// для теста работы стора 
// store.subscribe(() => console.info(store.getState()))

export default store;