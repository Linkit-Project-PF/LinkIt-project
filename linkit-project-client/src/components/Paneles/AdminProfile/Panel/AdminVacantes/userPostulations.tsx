import axios from "axios";
import { useEffect, useState } from "react";

type localData = {
  user: userInfo;
  status: string;
};

export type incomingData = {
  user: string;
  status: string;
};

interface propsInterface {
  users: incomingData[];
  onClose: () => void;
  token: string;
}

interface userInfo {
  _id: string;
  airTableId: string;
  image: string;
  name: string;
  email: string;
  country: string;
  linkedin: string;
  cv: string;
  role: string;
  technologies: string[];
  active: boolean;
  postulations: any[];
  __v: number;
}

export function UserPostulations(props: propsInterface) {
  const { users, token } = props;
  const [userList, setUserList] = useState<localData[]>([]);

  useEffect(() => {
    const getUserInfo = async () => {
      const info = [];
      for (let i = 0; i < users.length; i++) {
        const { data } = await axios(
          `https://linkit-server.onrender.com/users/find?id=${users[i].user}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const newObj = { user: data, status: users[i].status };
        info.push(newObj);
      }
      setUserList(info);
    };
    getUserInfo();
  }, []);
  return (
    <div>
      <a onClick={props.onClose}>X</a>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Download CV</th>
            <th>Stack</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item) => {
            return (
              <tr key={item.user._id}>
                <td>{item.user._id}</td>
                <td>{item.user.name}</td>
                <td>{item.user.email}</td>
                <td>{item.user.country}</td>
                <td>{item.user.cv}</td>
                <td>{item.user.technologies.join(", ")}</td>
                <td>{item.status}</td>
                {users.length ? (
                  <td>
                    <button>Edit</button>
                  </td>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/*

*/
