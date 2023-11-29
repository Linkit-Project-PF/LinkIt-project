import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userProps } from "../../../admin.types";
import { CreatePostulation } from "./createPost";

export interface localInfo {
  user: userProps;
  status: string;
}

export interface arrivingInfo {
  user: string;
  status: string;
}

interface propsInterface {
  users: arrivingInfo[];
  onClose: () => void;
  jdId: string;
}

export function UserPostulations(props: propsInterface) {
  const { users } = props;
  const [userList, setUserList] = useState<Partial<localInfo[]>>([]);
  const [createForm, viewCreateForm] = useState(false);
  const token = useSelector((state: any) => state.Authentication.token);
  const [changes, setChanges] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const newArr = [];
        for (let i = 0; i < users.length; i++) {
          const { data } = await axios.get(
            `https://linkit-server.onrender.com/users/find?id=${users[i].user}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const newObj = { user: data, status: users[i].status };
          newArr.push(newObj);
        }
        setUserList(newArr);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, [changes]);

  console.log(userList);

  function hideCreateForm(): void {
    viewCreateForm(false);
  }

  return (
    <div>
      <a onClick={props.onClose}>X</a>
      <a onClick={() => viewCreateForm(true)}>CREATE</a>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Ubicacion</th>
            <th>Tecnologias</th>
            <th>LinkedIn</th>
            <th>CV</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((obj) => (
            <tr key={obj?.user._id} className="gap-4">
              <td>{obj?.user._id}</td>
              <td>{obj?.user.name}</td>
              <td>{obj?.user.email}</td>
              <td>{obj?.user.country}</td>
              <td>{obj?.user.technologies.join(", ")}</td>
              <td>{obj?.user.linkedin}</td>
              <td>{obj?.user.cv}</td>
              <td>{obj?.status}</td>
              <td>EDIT</td>
              <td>DELETE</td>
            </tr>
          ))}
        </tbody>
      </table>
      {createForm && (
        <CreatePostulation
          onClose={hideCreateForm}
          reload={setChanges}
          jdId={props.jdId}
        />
      )}
    </div>
  );
}
