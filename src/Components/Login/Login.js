import React from "react"
import { Route, Routes, Navigate } from "react-router"
import LoginCreate from "./LoginCreate"
import LoginForm from "./LoginForm"
import LoginLost from "./LoginLost"
import LoginReset from "./LoginReset"
import { UserContext } from "../../UserContext"
import styles from "./Login.module.css"
import NotFound from "../NotFound"

const Login = () => {
  const { login } = React.useContext(UserContext)

  if (login === true) return <Navigate to='/conta' />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='cadastrar' element={<LoginCreate />} />
          <Route path='recuperar' element={<LoginLost />} />
          <Route path='resetar' element={<LoginReset />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
