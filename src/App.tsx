import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import { MainPage } from './pages/MainPage/MainPage';
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { StatsPage } from "./pages/StatsPage/StatsPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";



function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/" element={<Navigate to='/login' replace/>}/>
            <Route path="/main" element={<MainPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/stats" element={<StatsPage/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default App;