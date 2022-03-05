import React from "react"
import { Route, Routes, Navigate } from "react-router"
import LoginCreate from "./LoginCreate"
import LoginForm from "./LoginForm"
import LoginLost from "./LoginLost"
import LoginReset from "./LoginReset"
import styles from "./Login.module.css"
import NotFound from "../NotFound"
import { useSelector } from "react-redux"

const Login = () => {
  const { data } = useSelector((state) => state.user)

  if (data) return <Navigate to='/conta' />
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
