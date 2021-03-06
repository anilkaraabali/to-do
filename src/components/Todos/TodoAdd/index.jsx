import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { insertTodo, updateTodo } from '../../../store/todo'

import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import { useStyles } from './style'

import LanguageDetector from '../../LanguageDetector'

import { STATUSES, USERS } from '../../../constants'

const TodoAdd = ({ handleClose, open = false, todo = {}, isUpdate = false }) => {
    const classes = useStyles()
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const { handleSubmit, errors, reset, register } = useForm()

    const onSubmit = data => {
        const formData = {
            ...data,
            id: todo.id,
            dueDate: data.dueDate || null
        }

        isUpdate ? dispatch(updateTodo(formData)) : dispatch(insertTodo(formData))
        reset()
        handleClose()
    }

    return (
        <Dialog
            open={open}
            maxWidth="lg"
            onClose={handleClose}
            fullScreen={fullScreen}
            aria-labelledby="form-dialog-title"
        >
            <DialogActions>
                <LanguageDetector />
                <IconButton aria-label="close modal" onClick={handleClose}>
                    <CloseOutlinedIcon />
                </IconButton>
            </DialogActions>

            <DialogContent dividers className={classes.content}>
                {open && (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            id="title"
                            name="title"
                            type="text"
                            label={t('title')}
                            defaultValue={todo.title || ''}
                            inputRef={register({
                                required: {
                                    value: true,
                                    message: t('title-error')
                                }
                            })}
                            error={!!errors?.title?.message}
                            helperText={errors?.title?.message}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            required
                            autoFocus
                        />

                        <TextField
                            id="description"
                            name="description"
                            label={t('description')}
                            defaultValue={todo.description || ''}
                            inputRef={register}
                            multiline
                            rows={4}
                            rowsMax={6}
                            variant="outlined"
                            className={classes.field}
                        />

                        <Autocomplete
                            id="status"
                            options={STATUSES}
                            filterSelectedOptions
                            getOptionLabel={option =>
                                typeof option === 'string' ? option : option.status
                            }
                            getOptionDisabled={option => todo.status === option.status}
                            defaultValue={todo.status || STATUSES[0]}
                            className={classes.field}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    name="status"
                                    id="status"
                                    inputRef={register}
                                    label={t('status')}
                                    variant="outlined"
                                />
                            )}
                        />

                        <Autocomplete
                            id="assign"
                            options={USERS}
                            getOptionLabel={option => option}
                            getOptionDisabled={option => todo.assign === option}
                            defaultValue={todo.assign || ''}
                            className={classes.field}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    name="assign"
                                    id="assign"
                                    inputRef={register}
                                    label={t('assignee')}
                                    variant="outlined"
                                />
                            )}
                        />

                        <TextField
                            id="dueDate"
                            name="dueDate"
                            label={t('dueDate')}
                            defaultValue={todo.dueDate?.substring(0, 19) || ''}
                            type="datetime-local"
                            inputRef={register}
                            variant="outlined"
                            className={classes.field}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            className={classes.createBtn}
                        >
                            {isUpdate ? t('update') : t('create')}
                        </Button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    )
}

TodoAdd.propTypes = {
    isUpdate: PropTypes.bool,
    open: PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
    todo: PropTypes.object
}

export default TodoAdd
