import AllRoutes from "./Components/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import { AuthoProvider } from "./Components/AuthoContext";

function App() {
  return (
    <AuthoProvider>
      <BrowserRouter basename="/BPlant">
        <AllRoutes />
      </BrowserRouter>
    </AuthoProvider>
  );
}

export default App;
