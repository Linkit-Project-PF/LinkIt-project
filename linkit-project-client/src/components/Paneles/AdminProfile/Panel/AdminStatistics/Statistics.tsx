import axios from "axios";
import Chart, { ChartItem } from "chart.js/auto";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface UsersState {
  users: any[];
  companies: any[];
}

interface jdState {
  jds: any[];
}

export default function Statistics() {
  const [allusers, setUsers] = useState<UsersState>({
    users: [],
    companies: [],
  });
  const [allJDS, setAllJDS] = useState<jdState>({
    jds: [],
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
        const jds = await axios.get(
          "https://linkit-server.onrender.com/jds/find",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUsers({
          users: users.data,
          companies: companies.data,
        });
        setAllJDS({
          jds: jds.data,
        });
      } catch (error: any) {
        alert(error.response);
      }
    };
    getUsersInfo();
  }, []);

  console.log(allJDS);
  const jdsStatus = {
    open: 0,
    firstInterview: 0,
    secondInterview: 0,
    closed: 0,
  };
  allJDS.jds.forEach((jd) => {
    if (jd.status === "open") jdsStatus.open++;
    if (jd.status === "first-interview") jdsStatus.firstInterview++;
    if (jd.status === "second-interview") jdsStatus.secondInterview++;
    if (jd.status === "closed") jdsStatus.closed++;
  });
  console.log(jdsStatus);

  const jdStatusData = [
    { status: "Abiertas", count: jdsStatus.open },
    { status: "Primera entrevista", count: jdsStatus.firstInterview },
    { status: "Segunda entrevista", count: jdsStatus.secondInterview },
    { status: "Cerradas", count: jdsStatus.closed },
  ];

  const dataUsersLength = {
    datasets: [
      {
        data: [allusers.users.length, allusers.companies.length],
      },
    ],
    labels: ["Usuarios", "Empresas"],
  };
  if (allusers.users.length) {
    new Chart(document.getElementById("allUsersChart") as ChartItem, {
      type: "doughnut",
      data: dataUsersLength,
      options: {
        responsive: false,
      },
    });
    new Chart(document.getElementById("jdsStatusChart") as ChartItem, {
      type: "bar",
      data: {
        labels: jdStatusData.map((row) => row.status),
        datasets: [
          {
            label: "Vacantes por estado",
            data: jdStatusData.map((row) => row.count),
          },
        ],
      },
      options: {
        responsive: false,
      },
    });
  }

  return (
    <div className="mb-32">
      <div className="bg-linkIt-500 mx-12 rounded-[20px] rounded-b-none w-auto">
        <h1 className="text-4xl pl-16 py-6">Estadisticas</h1>
        <div className="w-1/3">
          <canvas id="allUsersChart"></canvas>
          <canvas id="jdsStatusChart"></canvas>
        </div>
      </div>
    </div>
  );
}
