import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"

// pages & components
import Home from "./pages/Home"
import BlogPost from './pages/BlogPost';
import AdminDashboard from './pages/AdminDashboard';
import Login from "./pages/Login"
import AdminGetPost from './pages/AdminGetPost';

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/article/:id"
              element={<BlogPost />}
            />

            <Route
              path="/login"
              element={user ? <Navigate to="/admin/dashboard" /> : <Login />}
            />

            <Route path="/admin/dashboard" element={user ? <AdminDashboard /> : <Navigate to="/login" />}
            />

            <Route path="/admin/dashboard/:id" element={user ? <AdminGetPost /> : <Navigate to="/login" />}/>
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
