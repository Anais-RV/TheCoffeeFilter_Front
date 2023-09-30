import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/layouts';
import Landing from '../pages/Landing';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminDashboard from '../pages/admin/admindashboard/AdminDashboard';

function RouterItem() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Landing />} />
                <Route path='/admin/login' element={<AdminLogin />} />
                <Route path='/admindashboard' element={<AdminDashboard />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default RouterItem;


