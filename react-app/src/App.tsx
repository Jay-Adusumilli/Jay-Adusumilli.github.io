import { BrowserRouter as Router } from "react-router-dom";
import NavRoutes from "./components/NavRoutes";

// The main component of the application.
function App() {
  // Renders the NavRoutes component into the Router creating the nav bar.
  return (
    <Router>
      <NavRoutes />
    </Router>
  );
}

export default App;
