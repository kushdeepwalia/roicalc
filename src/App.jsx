import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnBoardingPage from "./Pages/OnBoardingPage";

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/on-boarding" element={<OnBoardingPage />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
