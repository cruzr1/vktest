import {store} from '../store/index.js';

export type StateType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;