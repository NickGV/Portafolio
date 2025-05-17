import { Route, Routes } from "react-router-dom";
import { BackgroundWatermark } from "./components/Background/BackgroundWatermark";
import { Main } from "./layouts/Main";
import { ProjectsPage } from "./pages/ProjectsPage";

function App() {
  return (
    <div className="relative bg-gradient-radial from-background to-background-light">
      <BackgroundWatermark />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
