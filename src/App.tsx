import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import {Glossary} from "./pages/Glosary"
import { Quizzes } from "./pages/Quizzes";
import { ListActivities } from "./pages/ListActivities";
import { IELTSTraining } from "./pages/IELTSTraining";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/glossary" element={<Glossary />} />
      <Route path="/Quizzes" element={<Quizzes />} />
      <Route path="/activities" element={<ListActivities />} />
      <Route path="/ielts-training" element={<IELTSTraining />} />
    </Routes>
  )
}

export default App
