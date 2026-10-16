import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs.tsx";
import JobDetails from "./pages/JobDetails.tsx";
import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";


const App = () => {
return ( <Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/jobs" element={<Jobs />} />
<Route path="/jobs/:id" element={<JobDetails />} /> 
</Routes>
);
};

export default App;
