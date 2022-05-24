import { createStore } from 'redux';
import reducers from './reducers/reducers';

const store = createStore(reducers);

store.subscribe(() => console.info(store.getState()));

export default store;