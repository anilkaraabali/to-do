import React, { useMemo, useContext } from 'react'
import PropTypes from 'prop-types'

import useMediaQuery from '@material-ui/core/useMediaQuery'

const CommonContext = React.createContext()
export const useCommon = () => useContext(CommonContext)

export const CommonProvider = ({ children }) => {
    const matches = useMediaQuery('(min-width:960px)')
    const isMobile = useMemo(() => matches, [matches])

    return <CommonContext.Provider value={isMobile}>{children}</CommonContext.Provider>
}

CommonProvider.propTypes = {
    children: PropTypes.node.isRequired
}
