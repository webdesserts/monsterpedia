import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Routes from './routes/routes'
import './root.styles'

/*
 * <Root/>
 * -------
 * This is the Component that will be mounted to on the #app element It
 * currently only sets up our routes and store, but could also be used for any
 * thing else that has wide-reaching affects or needs to wrap the entire app.
 */

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object,
    history: PropTypes.object
  }

  render () {
    let { store, history } = this.props;
    return (
      <Provider store={store}>
        <Routes history={history}/>
      </Provider>
    )
  }
}
