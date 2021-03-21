import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { useStyles } from './style'

import menuData from './menuData'

const Menu = ({ isDrawerOpen, handleDrawerClose }) => {
    const classes = useStyles()
    const { t } = useTranslation()

    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index)
    }

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: isDrawerOpen,
                [classes.drawerClose]: !isDrawerOpen
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: isDrawerOpen,
                    [classes.drawerClose]: !isDrawerOpen
                })
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />{' '}
                </IconButton>
            </div>

            <List>
                {menuData.map(({ name, icon, path }, index) => (
                    <ListItem
                        button
                        component={Link}
                        to={path}
                        key={index}
                        selected={selectedIndex === index}
                        onClick={event => handleListItemClick(event, index)}
                    >
                        <ListItemIcon>{icon}</ListItemIcon>

                        <ListItemText primary={t(name)} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

Menu.propTypes = {
    handleDrawerClose: PropTypes.func.isRequired,
    isDrawerOpen: PropTypes.bool.isRequired
}

export default Menu
