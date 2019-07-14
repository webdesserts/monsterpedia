import React from 'react'
import DOM from 'react-dom'

import Root from './root'
import configureStore from './store/configureStore'

let store = configureStore()

DOM.render(<Root store={store}/>, document.getElementById('root'))
