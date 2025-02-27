import { Route, Routes } from 'react-router';
import LoginPage from './pages/LoginPage';
import Layout from './pages/Layout';
import Home from './pages/home';
import RegisterPage from './pages/RegisterPage';

import NotFaund from './components/NotFaund';

function App () {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='*' element={<NotFaund />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
