import axios from "axios";
import Chart, { ChartItem } from "chart.js/auto";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

interface UsersState {
  users: any[];
  companies: any[];
}

export default function Statistics() {
  const { t } = useTranslation();
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
  }

  return (
    <div className="mb-32">
      <div className="bg-linkIt-500 mx-12 rounded-[20px] rounded-b-none w-auto">
        <h1 className="text-4xl pl-16 py-6">{t("Estadisticas")}</h1>
        <section className="px-5">
          <div className="w-[300px]">
            <h2 className="text-2xl font-bold py-5">Registros de pagina web</h2>
            <canvas id="allUsersChart"></canvas>
            <div className="flex flex-row flex-wrap py-2 justify-center">
              <label className="px-2">Usuarios registrados: </label>
              <p>
                <b>{allusers.users.length}</b>
              </p>
              <label className="px-2">Empresas registradas: </label>
              <p>
                <b>{allusers.companies.length}</b>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
