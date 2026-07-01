import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { MainPage } from './pages/MainPage/MainPage';
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { StatsPage } from "./pages/StatsPage/StatsPage";



function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/stats" element={<StatsPage/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default App;