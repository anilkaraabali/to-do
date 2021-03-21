import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined'
import { useStyles } from './style'

const AlertDialog = ({
    handleCancel,
    handleConfirm,
    open,
    content,
    title,
    confirmBtnText,
    cancelBtnText
}) => {
    const { t } = useTranslation()
    const classes = useStyles()

    return (
        <Container>
            <Dialog
                open={open}
                onClose={handleCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Grid container alignItems="center">
                        <ErrorOutlineOutlinedIcon color="error" />
                        <Typography className={classes.title}>{title || t('warning')}</Typography>
                    </Grid>
                </DialogTitle>

                <DialogContent dividers>
                    <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleCancel} color="primary" variant="outlined">
                        {cancelBtnText || t('dialog-cancel-btn-text')}
                    </Button>

                    <Button onClick={handleConfirm} color="primary" variant="contained">
                        {confirmBtnText || t('dialog-confirm-btn-text')}
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

AlertDialog.propTypes = {
    open: PropTypes.bool,
    handleConfirm: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
    confirmBtnText: PropTypes.string,
    cancelBtnText: PropTypes.string
}

export default AlertDialog
