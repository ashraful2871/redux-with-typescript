import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[1320px] mx-auto space-y-5">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
