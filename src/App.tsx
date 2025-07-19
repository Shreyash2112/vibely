import { Route, Routes } from "react-router-dom";
import "./globals.css";
import SigninForm from "./auth/forms/SigninForm";
import SignupForm from "./auth/forms/SignupForm";
import AuthLayout from "./auth/AuthLayout";
import RootLayout from "./root/RootLayout";
import { Home } from "./root/pages";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* Private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
