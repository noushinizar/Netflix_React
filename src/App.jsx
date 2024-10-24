import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AuthContextProvider } from "./Context/AuthContext";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Acccount } from "./pages/Acccount";
import { ProtectedRoute } from "./components/ProtectedRoute";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Acccount />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
