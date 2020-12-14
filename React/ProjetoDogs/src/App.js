import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import User from './Pages/User';
import './App.css';
import UserStorage from './UserContext';
import ProtectedRoute from './Components/Helper/ProtecteRoute';
import Photo from './Pages/Photo';
import UserProfile from './Pages/UserProfile';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <main className="appBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <ProtectedRoute path="conta/*" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
