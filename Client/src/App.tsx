import { Routes, Route } from "react-router-dom"
import SignInForm from '../src/auth/forms/SignInForm'
import  Home  from "./root/pages/Home"
import SignUpForm from "./auth/forms/SignUpForm"
import AuthLayout from "./auth/AuthLayout"
import RootLayout from "./root/RootLayout"

function App() {

  return (
    <>
      <main>
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout/>}>
           <Route path="/sign-in" element={<SignInForm/>}/>
          <Route path="/sign-up" element={<SignUpForm/>}/>
          </Route>
         

          {/* private router  */}
          <Route element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
