import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { StateAndDispatchProvider } from './Store/index'

ReactDOM.render(
  <StateAndDispatchProvider>
    <App />
  </StateAndDispatchProvider>,
  document.getElementById('root')
)
