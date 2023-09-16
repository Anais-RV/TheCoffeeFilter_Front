import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../layouts/Layouts';
import Landing from '../pages/landing';

function RouterItem() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Landing/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterItem;

