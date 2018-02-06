import { combineReducers } from 'redux'
import messages from './messages'
import users from './users'
import {routerReducer} from 'react-router-redux';

const chat = combineReducers({
  messages,
  users,
  routing: routerReducer
})

export default chat
