import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import './index.css'
import App from './App'
import RoomPicker from './components/RoomPicker'

import registerServiceWorker from './registerServiceWorker'
import reducers from './reducers'

import handleNewMessage from './sagas'
import setupSocket from './sockets'
import username from './utils/name'
import base from './base'

//import react router deps
import{Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

const sagaMiddleware = createSagaMiddleware()

const enhancers = compose(
	window.devToolsExtension ?  window.devToolsExtension() : f=>f
);

const store = createStore(
  reducers,
  enhancers,
  applyMiddleware(sagaMiddleware),
)

/** Function to update the db when store changes */
const fromStore = (state, db) => {
  db.ref('/roomx').set(state.messages);
};

const db = base.database();
store.subscribe(() => fromStore(store.getState(), db));


const socket  = setupSocket(store.dispatch, username)
const history = syncHistoryWithStore(browserHistory, store);

sagaMiddleware.run(handleNewMessage, { socket, username })

ReactDOM.render(
  <Provider store={store}>
	<Router history={history}>
		<Route path="/" component={RoomPicker}></Route>
		<Route path="/room/:roomId" component={App}></Route>
	</Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
