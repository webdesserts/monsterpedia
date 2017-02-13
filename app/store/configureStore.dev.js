import { createStore, applyMiddleware, compose } from 'redux';
//import { devTools, persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const finalCreateStore = compose(

  applyMiddleware(thunk)
  //devTools()

  // devTools has the ability to persist state across reloads. To set this up
  // add `?debug_session=[some_key]` to your url and any time you revisit that
  // url it will pick up the state where you left it.
  //persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))

)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // this little script allows us to hot reload our main app reducer anytime
  // it's dependencies update
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers'))
    );
  }

  return store;
}
