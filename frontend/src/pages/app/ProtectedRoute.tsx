import React, { HTMLAttributes } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { Navigate } from "react-router-dom"

interface Props extends HTMLAttributes<HTMLElement> {}

const ProtectedRoute = ({ children }: Props): JSX.Element => {
    const user = useSelector((state: RootState) => state.auth.user)
    return !!user ? <>{children}</> : <Navigate to="/login" replace />
}

export default ProtectedRoute
