import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { getTodos, deleteTodo, deleteTodos } from '../../store/todo'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useStyles } from './style'

import Todo from './Todo'
import TodoEmpty from './TodoEmpty'
import AlertDialog from '../AlertDialog'

const Todos = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const classes = useStyles()
    const { todos, pending } = useSelector(state => state.todo)
    const [selectedTodo, setSelectedTodo] = useState({})
    const [openDialog, setOpenDialog] = useState(false)

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])

    if (pending)
        return (
            <Container>
                <Grid container justify="center" alignItems="center">
                    <CircularProgress />
                </Grid>
            </Container>
        )
    if (!todos.length) return <TodoEmpty />

    return (
        <Container disableGutters className={classes.container}>
            <Grid container spacing={1} alignItems="center" className={classes.header}>
                <Grid item xs={1} />
                <Grid item xs={6} />
                <Grid item xs={1}>
                    <Grid container justify="center">
                        <Typography variant="overline" display="block" color="inherit">
                            {t('assignee')}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Grid container justify="center">
                        <Typography variant="overline" display="block">
                            {t('dueDate')}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Grid container justify="flex-end">
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => setOpenDialog(true)}
                        >
                            {t('delete-all')}
                        </Button>

                        <AlertDialog
                            open={openDialog}
                            content={t('delete-todos-dialog-content')}
                            handleCancel={() => setOpenDialog(false)}
                            handleConfirm={() => {
                                dispatch(deleteTodos())
                                setOpenDialog(false)
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>

            {todos.map((todo, index) => (
                <Todo
                    key={`todo-${todo.title}`}
                    todo={todo}
                    open={selectedTodo.id === todos[index].id}
                    handleClose={() => setSelectedTodo({})}
                    selectedTodo={selectedTodo}
                    setSelectedTodo={() => setSelectedTodo(todos[index])}
                    deleteTodo={() => dispatch(deleteTodo(todo.id))}
                />
            ))}
        </Container>
    )
}

export default Todos
