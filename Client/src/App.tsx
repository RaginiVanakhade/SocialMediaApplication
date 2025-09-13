import { Routes, Route } from "react-router-dom";
import SignInForm from "./auth/forms/SignInForm";
import SignUpForm from "./auth/forms/SignUpForm";
import AuthLayout from "./auth/AuthLayout";
import RootLayout from "./root/RootLayout";
import Home from "./root/pages/Home";


function App() {
  return (
    <main>
      <Routes>
        {/* Public */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        {/* Private */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
      </Routes>
    </main>
  );
}

export default App;
