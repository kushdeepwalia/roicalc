import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';
import OnBoardingPage from './Pages/OnBoardingPage';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/on-boarding' element={<OnBoardingPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
