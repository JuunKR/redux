import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Props from "./routes/Props"
import Redux from "./routes/Redux"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/props" element={<Props />}></Route>
          <Route path="/redux" element={<Redux />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
