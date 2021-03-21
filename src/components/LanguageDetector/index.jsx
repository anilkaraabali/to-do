import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined'

const LanguageDetector = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const { t, i18n } = useTranslation()

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const handleModalOpen = e => {
        setAnchorEl(e.currentTarget)
    }

    const handleChangeLanguage = lang => {
        i18n.changeLanguage(lang)
        handleMenuClose()
    }

    return (
        <>
            <IconButton
                aria-label="language detector"
                aria-controls="language-detector"
                aria-haspopup="true"
                onClick={handleModalOpen}
                color="inherit"
            >
                <LanguageOutlinedIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id="language-detector"
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={!!anchorEl}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={() => handleChangeLanguage('tr')}>{t('turkish')}</MenuItem>
                <MenuItem onClick={() => handleChangeLanguage('en')}>{t('english')}</MenuItem>
            </Menu>
        </>
    )
}

export default LanguageDetector
