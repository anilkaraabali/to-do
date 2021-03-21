import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '@material-ui/core/Button'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import { useStyles } from './style'

import { Todos, TodoAdd } from '../../components'

const Homepage = () => {
    const [open, setOpen] = useState(false)
    const { t } = useTranslation()
    const classes = useStyles()

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Todos />

            <Button
                color="primary"
                variant="contained"
                onClick={handleClickOpen}
                startIcon={<AddOutlinedIcon />}
                className={classes.taskBtn}
            >
                {t('task')}
            </Button>

            <TodoAdd open={open} handleClose={handleClose} />
        </div>
    )
}

export default Homepage
