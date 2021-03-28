import React, { Fragment, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { updateTodo } from '../../../../store/todo'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import { useStyles } from './style'

import { STATUSES } from '../../../../constants'

const TodoStasus = ({ todo }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null)

    const getStatus = useMemo(() => STATUSES.find(({ status }) => status === todo.status), [
        todo.status
    ])

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => setAnchorEl(null)

    const handleSubmit = status => {
        if (todo.status !== status) {
            const formData = {
                ...todo,
                status
            }
            delete formData.createdAt
            delete formData.updatedAt

            dispatch(updateTodo(formData))
        }

        handleClose()
    }

    return (
        <Fragment>
            <Tooltip title={getStatus.name} onClick={handleClick}>
                <IconButton aria-label="status">
                    <div
                        className={classes.status}
                        style={{ backgroundColor: getStatus.color }}
                    ></div>
                </IconButton>
            </Tooltip>

            <Menu
                id="status-menu"
                anchorEl={anchorEl}
                keepMounted
                open={!!anchorEl}
                onClose={handleClose}
            >
                {STATUSES.map(({ name, color }) => (
                    <MenuItem key={`status-${name}`} onClick={() => handleSubmit(name)}>
                        <div
                            className={`${classes.status} ${classes.itemStatus}`}
                            style={{ backgroundColor: color }}
                        ></div>
                        {name}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    )
}

TodoStasus.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoStasus
