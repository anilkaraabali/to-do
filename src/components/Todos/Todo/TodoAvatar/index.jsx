import React, { Fragment, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { updateTodo } from '../../../../store/todo'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined'
import { useStyles } from './style'

import { USERS } from '../../../../constants'

const TodoAvatar = ({ todo }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [anchorEl, setAnchorEl] = useState(null)

    const getAvatarLetters = useMemo(
        () =>
            todo.assign
                .split(' ')
                .map(item => item.toUpperCase().substring(0, 1))
                .join(''),
        [todo.assign]
    )

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => setAnchorEl(null)

    const handleSubmit = assign => {
        if (todo.assign !== assign) {
            const formData = {
                ...todo,
                assign
            }
            delete formData.createdAt
            delete formData.updatedAt

            dispatch(updateTodo(formData))
        }

        handleClose()
    }

    return (
        <Fragment>
            <IconButton aria-label="avatar" onClick={handleClick}>
                <Avatar className={classes.avatar}>
                    <Tooltip title={todo.assign ? todo.assign : t('assign')}>
                        {todo.assign ? (
                            <Typography variant="caption" display="block">
                                {getAvatarLetters}
                            </Typography>
                        ) : (
                            <PersonAddOutlinedIcon />
                        )}
                    </Tooltip>
                </Avatar>
            </IconButton>

            <Menu
                id="assign-menu"
                anchorEl={anchorEl}
                keepMounted
                open={!!anchorEl}
                onClose={handleClose}
            >
                {USERS.map((user, index) => (
                    <MenuItem key={`user-${index}`} onClick={() => handleSubmit(user)}>
                        {user}
                    </MenuItem>
                ))}
            </Menu>
        </Fragment>
    )
}

TodoAvatar.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoAvatar
