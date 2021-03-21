import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'

import { store } from './store'
import { theme } from './theme'

import CircularProgress from '@material-ui/core/CircularProgress'

import App from './components/App'
import './i18n'
import './index.scss'
import './styles/main.scss'

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<CircularProgress />}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Suspense>
    </Provider>,
    document.getElementById('root')
)

// eslint-disable-next-line no-undef
module.hot.accept()
