import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import { useCommon } from '../../providers/CommonProvider'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import { useStyles } from './style'

import LanguageDetector from '../LanguageDetector'

import logo from './logo.png'

const Header = ({ isDrawerOpen, handleDrawerOpen }) => {
    const isMobile = useCommon()
    const classes = useStyles()

    return (
        <AppBar
            position="fixed"
            elevation={0}
            className={clsx(classes.appBar, {
                [classes.appBarShift]: isDrawerOpen
            })}
        >
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item xs={6} md={3}>
                        <Grid container alignItems="center">
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawerOpen}
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: isDrawerOpen
                                })}
                            >
                                <MenuOutlinedIcon />
                            </IconButton>

                            <Link to="/" className={classes.logoContainer}>
                                <img src={logo} alt="company logo" className={classes.logo} />
                            </Link>
                            <span className={classes.brand}>Todo</span>
                        </Grid>
                    </Grid>

                    {isMobile && <Grid item md={6}></Grid>}

                    <Grid item xs={6} md={3}>
                        <Grid container alignItems="center" justify="flex-end">
                            <LanguageDetector />
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    handleDrawerOpen: PropTypes.func.isRequired,
    isDrawerOpen: PropTypes.bool.isRequired
}

export default Header
