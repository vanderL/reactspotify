import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware(sagaMonitor);

middlewares.push(sagaMiddleware)

const enhancer = process.env.NODE_ENV === 'development' 
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

    const store = createStore(reducers, enhancer);

sagaMiddleware.run(sagas);

export default store;