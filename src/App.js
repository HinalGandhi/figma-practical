import { Route, Routes } from 'react-router-dom';
import {Login} from "./pages/Login/login";
import {Register} from "./pages/Register/Register";
import {NotFound} from "./pages/404/NotFound";
import { Dashboard} from "./layouts/Dashboard"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
}

export default App;