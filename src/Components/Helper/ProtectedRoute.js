import React from "react"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoute = ({ children, redirectTo }) => {
  const { data } = useSelector((state) => state.user)

  if (data) return children
  else if (data === null) return <Navigate to={redirectTo} />
  else return null
}

export default ProtectedRoute
