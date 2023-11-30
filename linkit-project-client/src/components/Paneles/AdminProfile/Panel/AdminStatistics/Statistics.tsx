import axios from "axios";
import Chart, { ChartItem } from "chart.js/auto";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface UsersState {
  users: any;
  companies: any;
}

export default function Statistics() {
  const [allusers, setUsers] = useState<UsersState>({
    users: [],
    companies: [],
  });
  const token = useSelector((state: any) => state.Authentication.token);

  useEffect(() => {
    const getUsersInfo = async () => {
      try {
        const users = await axios.get(
          "https://linkit-server.onrender.com/users/find",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const companies = await axios.get(
          "https://linkit-server.onrender.com/companies/find",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setUsers({
          users: users.data,
          companies: companies.data,
        });
      } catch (error: any) {
        alert(error.response);
      }
    };
    getUsersInfo();
  }, []);

  const data = {
    datasets: [
      {
        data: [allusers.users.length, allusers.companies.length],
      },
    ],
    labels: ["Users", "Companies"],
  };
  if (allusers.users.length) {
    new Chart(document.getElementById("allUsersChart") as ChartItem, {
      type: "doughnut",
      data: data,
    });
  }

  return (
    <div className="mb-32">
      <div className="bg-linkIt-500 mx-12 rounded-[20px] rounded-b-none w-auto">
        <h1 className="text-4xl pl-16 py-6">Estadisticas</h1>
        <div className="w-1/3">
          <canvas id="allUsersChart" className="w-max"></canvas>
        </div>
      </div>
    </div>
  );
}
