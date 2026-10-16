import { Navigate, Outlet, useLocation } from "react-router-dom";
import useCurrentUser from "../hooks/useCurrentUser";

function ProtectedRoute() {
  const { data: user, isPending, isError } = useCurrentUser();
   const location = useLocation()

  if (isPending) {
    return <div> Checking for authentication. </div>;
  }
// replace is true

  if (isError || !user) {
   return <Navigate to="/login" replace state={{from: location}}/>
  }

  return (
      <Outlet />
  )
}

export default ProtectedRoute;

// check for authenticatio where necessary
// if the user is not verified , redirect to login retain the current state