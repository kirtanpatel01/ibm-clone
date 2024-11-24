import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <div className="scroll-mt-11 pt-11">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
