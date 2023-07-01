import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import JobDetail from "./pages/JobDetail/JobDetail";
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
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:id" element={<JobDetail />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
