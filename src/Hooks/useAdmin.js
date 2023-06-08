import { useEffect, useState } from "react";

const useAdmin = email => {
    const [ isAdmin, setIsAdmin ] = useState(false)
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
              console.log(data);
              setIsAdmin(data.isAdmin);
              setIsAdminLoading(false);
            })
            .catch(error => {
              console.error('Error fetching admin data:', error);
              // Handle the error state here (e.g., setIsAdmin(false), setIsAdminLoading(false), setError(true))
            });
          
        }
    } ,[email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;