import React from "react"
import { Route, Routes, Navigate } from "react-router"
import LoginCreate from "./LoginCreate"
import LoginForm from "./LoginForm"
import LoginLost from "./LoginLost"
import LoginReset from "./LoginReset"
import { UserContext } from "../../UserContext"

const Login = () => {
  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to='/conta' />
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='criar' element={<LoginCreate />} />
        <Route path='recuperar' element={<LoginLost />} />
        <Route path='resetar' element={<LoginReset />} />
      </Routes>
    </div>
  )
}

export default Login
