import React from 'react'
import { Provider } from 'react-redux'
import { Store } from 'redux';
import Routes from './routes/routes'
import { RootStyles } from './root.styles'

/*
 * <Root/>
 * -------
 * This is the Component that will be mounted to on the #app element It
 * currently only sets up our routes and store, but could also be used for any
 * thing else that has wide-reaching affects or needs to wrap the entire app.
 */

 type Props = {
   store: Store,
 }

export default function Root ({ store }: Props) {
  return (
    <div>
      <RootStyles />
      <Provider store={store}>
        <Routes/>
      </Provider>
    </div>
  )
}
