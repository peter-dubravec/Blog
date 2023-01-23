import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages & components
import Home from "./pages/Home"
import BlogPost from './pages/BlogPost';
import Admin from './pages/Admin';

function App() {
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
              path="/admin"
              element={<Admin />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
