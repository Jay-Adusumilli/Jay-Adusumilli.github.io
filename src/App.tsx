import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";

// The main component of the application.
function App() {
  // Renders the NavRoutes component into the Router creating the nav bar.
  return (
    <Router>
      <NavBar title="Jay Adusumilli" />
    </Router>
  );
}

export default App;
