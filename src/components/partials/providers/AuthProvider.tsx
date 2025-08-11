import {Navigate} from 'react-router'

import {ROUTES} from '../../../core/const'
import {getItem} from '../../../core/services/storage.services'

interface IAuthProviderProps {
    requireAuth?: boolean
    children: React.ReactNode
}

const AuthProvider: React.FC<IAuthProviderProps> = ({requireAuth = true, children}) => {
    const token = getItem('access_token')
    const isAuthenticated = !!token

    if (requireAuth && !isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} />
    }

    if (!requireAuth && isAuthenticated) {
        return <Navigate to={ROUTES.DASHBOARD} />
    }

    return children
}

export default AuthProvider
