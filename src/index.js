import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import './index.css'
import App from './App'
import username from './utils/name'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

