import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"

// pages & components
import Home from "./pages/Home"
import BlogPost from './pages/BlogPost';
import AdminDashboard from './pages/AdminDashboard';
import Login from "./pages/Login"
import AdminGetPost from './pages/AdminGetPost';
import AdminEditPost from './pages/AdminEditPost';
import CreatePost from './pages/CreatePost';
import SidePanel from './components/SidePanel';


function App() {
  const { user } = useAuthContext()


  return (
    <div className="App">

      <div className="content-wrapper">
        <SidePanel />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<BlogPost />} />
            <Route path="/login" element={user ? <AdminDashboard /> : <Login />} />
            <Route path="/admin/dashboard" element={user ? <AdminDashboard /> : <Login />} />
            <Route path="/admin/dashboard/:id" element={user ? <AdminGetPost /> : <Login />} />
            <Route path="/admin/dashboard/:id/edit" element={user ? <AdminEditPost /> : <Login />} />
            <Route path="/admin/create-post" element={user ? <CreatePost /> : <Login />} />
          </Routes>
        </div>
      </div>
    </div >
  );
}

export default App;
