import { Outlet, Navigate } from 'react-router-dom'
import { useUserContext } from '../context/AuthContext'


const AuthLayout = () => {
  const {isAuthenticated } = useUserContext();
  return (
    <div>{isAuthenticated ? (
      <Navigate to={'/'} replace />
    ) : (
      <>
      <section>
        <Outlet/>
      </section>
      </>
    )}</div>
  )
}

export default AuthLayout