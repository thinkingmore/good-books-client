import { useEffect, useState } from "react"

export const useFetch = (email) =>{
    
    const [userInfo, setUserInfo] = useState('');
   
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/nay@gmail.com`)
            .then(res=>res.json())
            .then(data=>{
                setUserInfo(data)
            })
        }
    },[email])

    return [userInfo]
}