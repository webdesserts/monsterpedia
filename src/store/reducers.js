import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import monsters from './monsters/reducer'
import skills from './skills/reducer'

/*
 * The result of this combined reducer represents the app's state object as a
 * whole
 */
export default combineReducers({
  // This reducer stores the current route in an easily accessibly property
  // within our state. This allows us to store a url and pass it into this
  // property to update the app to a specific location.
  routing: routeReducer,

  // You can pass any reducer into a property on this object and the results of
  // that reducer will be exposed under that property in our redux store. For
  // example if you wanted to expose a store a list of users in your store you
  // could do the following:
  //
  // users: usersReducer

  monsters,
  skills
})
