import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined'
import { useStyles } from './style'

import TodoAdd from '../TodoAdd'

import { STATUSES } from '../../../constants'

const Todo = ({ todo, open, handleClose, selectedTodo, setSelectedTodo, deleteTodo }) => {
    const classes = useStyles()
    const { t } = useTranslation()

    const getAvatarLetters = name =>
        name
            .split(' ')
            .map(item => item.toUpperCase().substring(0, 1))
            .join('')

    const findStatus = () => STATUSES.find(({ status }) => status === todo.status)

    const getTimeRemaining = useMemo(() => {
        const diff = Date.parse(todo.dueDate) - Date.now()
        return Math.round(diff / (1000 * 60 * 60 * 24))
    }, [todo.dueDate])

    return (
        <Grid container alignItems="center" spacing={1} className={classes.todo}>
            <Grid item xs={1}>
                <Grid container justify="center">
                    <Tooltip title={findStatus().name}>
                        <IconButton aria-label="status">
                            <div
                                className={classes.todoStatus}
                                style={{ backgroundColor: findStatus().color }}
                            ></div>
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>

            <Grid item xs={6}>
                <Typography variant="body2">{todo.title}</Typography>
            </Grid>

            <Grid item xs={1}>
                <Grid container justify="center">
                    <Avatar className={classes.todoAvatar}>
                        {todo.assign ? (
                            <Tooltip title={todo.assign}>
                                <Typography variant="caption" display="block">
                                    {getAvatarLetters(todo.assign)}
                                </Typography>
                            </Tooltip>
                        ) : (
                            <PersonOutlineOutlinedIcon />
                        )}
                    </Avatar>
                </Grid>
            </Grid>

            <Grid item xs={2}>
                <Grid container justify="center">
                    <Typography variant="body2">
                        {todo.dueDate ? (
                            `${
                                getTimeRemaining > 0
                                    ? `${getTimeRemaining} ${t('days-left')}`
                                    : `${t('last-day')}`
                            }`
                        ) : (
                            <IconButton aria-label="due date" disabled color="primary">
                                <EventAvailableOutlinedIcon />
                            </IconButton>
                        )}
                    </Typography>
                </Grid>
            </Grid>

            <Grid item xs={2}>
                <Grid container justify="center">
                    <IconButton aria-label="edit" onClick={setSelectedTodo}>
                        <VisibilityOutlinedIcon fontSize="inherit" />
                    </IconButton>

                    <TodoAdd open={open} handleClose={handleClose} todo={selectedTodo} isUpdate />

                    <IconButton aria-label="delete" onClick={deleteTodo}>
                        <DeleteOutlinedIcon fontSize="inherit" />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    selectedTodo: PropTypes.object.isRequired,
    setSelectedTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todo
