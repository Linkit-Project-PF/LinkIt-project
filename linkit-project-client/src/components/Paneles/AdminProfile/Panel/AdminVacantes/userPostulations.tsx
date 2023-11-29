import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

interface propsInterface {
    users: any[],
    onClose: () => void
}

export function UserPostulations(props: propsInterface) {
    const {users} = props
    const [userList, setUserList] = useState([])
    console.log(userList)
    const token = useSelector((state:any) => state.Authentication.authState.token)

    useEffect(() => {
        const getUsers = async () => {
            try {
                const newArr = [];
                for (let i = 0; i < users.length; i++) {
                    const {data} = await axios.get(`https://linkit-server.onrender.com/users/find?id=${users[i]._id}`, {headers: {
                        "Authorization": `Bearer ${token}`
                    }});
                    const newObj = {user: data, status: users[i].status};
                    newArr.push(newObj)
                }
                setUserList(newArr as any)
            } catch (error) {
                console.error(error)
            }
        }
        getUsers();
    }, [])
    return(
        <div>
           <a onClick={props.onClose}>X</a>
        </div>
    )
}