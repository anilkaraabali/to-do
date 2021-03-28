import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CommonProvider } from '../../providers/CommonProvider'

import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import { Header, Menu } from '..'
import { Homepage } from '../../pages'

import './index.scss'

const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

const App = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const { error, success } = useSelector(state => state.todo)

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true)
    }

    const handleDrawerClose = () => {
        setIsDrawerOpen(false)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpenSnackbar(false)
    }

    useEffect(() => {
        if (error || success) setOpenSnackbar(true)
    }, [error, success])

    return (
        <CommonProvider>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={error ? 'error' : 'success'}>
                    {error ? error : success}
                </Alert>
            </Snackbar>

            <div className={`App ${isDrawerOpen && 'App--open'} `}>
                <Router>
                    <Header isDrawerOpen={isDrawerOpen} handleDrawerOpen={handleDrawerOpen} />
                    <Menu isDrawerOpen={isDrawerOpen} handleDrawerClose={handleDrawerClose} />

                    <main className="App__main">
                        <Switch>
                            <Route path="/">
                                <Homepage />
                            </Route>
                        </Switch>
                    </main>
                </Router>
            </div>
        </CommonProvider>
    )
}

export default App
