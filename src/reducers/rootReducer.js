import { combineReducers } from 'redux'
import { reducer } from 'redux-storage'
import { routerReducer as routing } from 'react-router-redux'
import campaigns from "./campaigns_reducer"
import loader from "./loader_reducer"

const appReducer = reducer(combineReducers({
  routing,
  campaigns,
  loader,
}))

const helloReducer = (state,action) => appReducer(state,action)

export default helloReducer
