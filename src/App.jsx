import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';
import OnBoardingPage from './Pages/OnBoardingPage';
import RoiPage from './Pages/RoiPage';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/on-boarding' element={<OnBoardingPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/roi' element={<RoiPage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
