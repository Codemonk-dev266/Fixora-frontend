import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Jobs from "./pages/Jobs.tsx";
import JobDetails from "./pages/JobDetails.tsx";
import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";
import ProtectedRoute from "./components/protectedRoute.tsx";
import CustomerDashboard from "./pages/CustomerDashboard.tsx";
import ProviderDashboard from "./pages/ProviderDashboard.tsx";


const App = () => {
return ( <Routes>
<Route path="/" element={<Home />} />
{/* these routes helps users to get auth */}
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />

<Route path="/jobs" element={<Jobs />} />
<Route path="/jobs/:id" element={<JobDetails />} /> 

{/* routes that needs authorizartion */}
<Route element={<ProtectedRoute/>}>
<Route path="/customer" element={<CustomerDashboard/>}/>
<Route path="/provider" element={<ProviderDashboard/>}/>

</Route>
</Routes>
);
};

export default App;
