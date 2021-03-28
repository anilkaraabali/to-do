import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
    status: {
        width: 8,
        height: 8,
        borderRadius: 2
    },
    itemStatus: {
        marginRight: theme.spacing(1)
    }
}))
