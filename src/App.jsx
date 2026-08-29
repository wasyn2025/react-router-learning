import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ParentDashboard from './pages/ParentDashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<ParentDashboard />}>
          {/* <Route path='profile/' element={<Profile />} /> */}
          <Route path='profile/:firstName?' element={<Profile />} />
          <Route path='settings' element={<Settings />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}