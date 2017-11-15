import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import {Provider} from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { WrapperApp } from './App'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))
  
  
  ReactDOM.render(
    <Provider store={store} >
      <WrapperApp />
    </Provider>, document.getElementById('root')
  )