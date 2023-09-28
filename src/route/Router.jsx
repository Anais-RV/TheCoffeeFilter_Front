import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/layouts';
import Landing from '../pages/Landing';
import Login from '../components/login/login';

function RouterItem() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Landing />} />
                <Route path='admin/login' element={<Login />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default RouterItem;


