import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined'
import { useStyles } from './style'

import TodoAdd from '../TodoAdd'
import TodoStatus from './TodoStatus'
import TodoAvatar from './TodoAvatar'

const Todo = ({ todo, open, handleClose, selectedTodo, setSelectedTodo, deleteTodo }) => {
    const classes = useStyles()

    const getTimeRemaining = useMemo(() => {
        if (!todo.dueDate) return

        const dueDate = Date.parse(todo.dueDate)
        return formatDistanceToNow(dueDate, { addSuffix: true })
    }, [todo.dueDate])

    return (
        <Grid container alignItems="center" spacing={1} className={classes.todo}>
            <Grid item xs={1}>
                <Grid container justify="center">
                    <TodoStatus todo={todo} />
                </Grid>
            </Grid>

            <Grid item xs={6}>
                <Typography variant="body2">{todo.title}</Typography>
            </Grid>

            <Grid item xs={1}>
                <Grid container justify="center">
                    <TodoAvatar todo={todo} />
                </Grid>
            </Grid>

            <Grid item xs={2}>
                <Grid container justify="center">
                    <Typography variant="body2">
                        {todo.dueDate ? (
                            getTimeRemaining
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
