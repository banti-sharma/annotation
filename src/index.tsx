import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

function handleRenderError(error: Error) {
  console.error(error)
}
function ErrorFallback(props: any) {
  /** TODO: Add UI to be shown when there is render error */
  return <div> </div>
}

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleRenderError}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
