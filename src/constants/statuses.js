import i18n from '../i18n'

import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import grey from '@material-ui/core/colors/grey'

export const STATUSES = [
    {
        status: 'Open',
        name: i18n.t('open'),
        color: grey[400]
    },
    {
        status: 'In Progress',
        name: i18n.t('in-progress'),
        color: blue[400]
    },
    {
        status: 'Closed',
        name: i18n.t('closed'),
        color: green[400]
    }
]
