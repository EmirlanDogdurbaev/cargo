import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile/Profile";


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="profile" element={<Profile />} />
          <Route path="institution" element={<Jobs />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
