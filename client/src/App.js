import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"

// pages & components
import Home from "./pages/Home"
import BlogPost from './pages/BlogPost';
import AdminDashboard from './pages/AdminDashboard';
import Login from "./pages/Login"
import AdminGetPost from './pages/AdminGetPost';
import AdminEditPost from './pages/AdminEditPost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreatePost from './pages/CreatePost';
import SidePanel from './components/SidePanel';


function App() {
  const { user } = useAuthContext()


  return (
    <div className="App">
      <div className="content-wrapper">
        <BrowserRouter>
          <SidePanel />
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

              <Route path="/admin/dashboard/:id" element={user ? <AdminGetPost /> : <Navigate to="/login" />} />

              <Route path="/admin/dashboard/:id/edit" element={user ? <AdminEditPost /> : <Navigate to="/login" />} />

              <Route path="/admin/create-post" element={user ? <CreatePost /> : <Navigate to="/login" />} />

            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div >
  );
}

export default App;
