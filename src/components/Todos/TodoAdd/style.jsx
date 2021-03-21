import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    field: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(1),
        width: '100%'
    },
    createBtn: {
        marginTop: theme.spacing(3)
    }
}))
