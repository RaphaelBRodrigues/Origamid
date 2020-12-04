import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import User from './Pages/User';
import './App.css';
import UserStorage from './UserContext';
import ProtectedRoute from './Components/Helper/ProtecteRoute';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <ProtectedRoute path="conta/*" element={<User />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
