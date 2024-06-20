
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
    const { isAuthenticated } = useSelector(store => store.user)
    return isAuthenticated ? <Outlet /> : <Navigate to={'/'} />
}

export default PrivateRoute;