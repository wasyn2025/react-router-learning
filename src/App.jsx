import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import DashboardLayout from './layouts/DashboardLayout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<DashboardLayout />}>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}