import React from 'react'

import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined'
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'

export default [
    { name: 'board', icon: <DashboardOutlinedIcon />, path: '/' },
    { name: 'archive', icon: <ArchiveOutlinedIcon />, path: '/archive' },
    {
        name: 'trash',
        icon: <DeleteOutlineOutlinedIcon />,
        path: '/trash'
    }
]
