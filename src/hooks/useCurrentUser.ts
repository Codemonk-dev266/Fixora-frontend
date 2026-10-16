import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client";

function useCurrentUser() {

    return  useQuery({
        queryKey: ["auth", "user"],
        queryFn: async () => {
            const{ data} = await api.get("/me") 


        return data

        }

    })
 
}

export default useCurrentUser;
