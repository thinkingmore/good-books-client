import { useEffect, useState } from "react"

export const useFetch = (email) =>{
    
    const [userInfo, setUserInfo] = useState('');
   
    useEffect(()=>{
        if(email){
            fetch(`https://good-books-server.vercel.app/users/${email}`)
            .then(res=>res.json())
            .then(data=>
                setUserInfo(data)
            )
        }
    },[email])

    return [userInfo]
}