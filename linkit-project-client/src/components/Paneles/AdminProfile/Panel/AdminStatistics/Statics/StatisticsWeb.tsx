import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../redux/types";
import { ICompany, IUser } from "../../../../../Profiles/types";
import StatisticsCard from "./StatisticsCard";
import { PieChart, Pie, Cell } from "recharts";
import {
  mostRepeatedCountry,
  mostRepeatedInterest,
  mostUsedProvider,
} from "./Helpers/WebFunctions";
import graphIcon from "../../../../../../assets/graph-create.svg";

export default function StatisticsWeb() {
  const { token } = useSelector((state: RootState) => state.Authentication);

  const [users, setUsers] = useState<IUser[]>([]);
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [jds, setJDs] = useState();
  const [activeData, setActiveData] = useState<any>();
  const currentDate = new Date();

  useEffect(() => {
    const fetchAllData = async () => {
      const allUsers = await axios.get(
        "https://linkit-server.onrender.com/users/find",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": sessionStorage.getItem("lang"),
          },
        }
      );
      const allCompanies = await axios.get(
        "https://linkit-server.onrender.com/companies/find",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": sessionStorage.getItem("lang"),
          },
        }
      );
      const allJds = await axios.get(
        "https://linkit-server.onrender.com/jds/find",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept-Language": sessionStorage.getItem("lang"),
          },
        }
      );
      setUsers(allUsers.data);
      setCompanies(allCompanies.data);
      setJDs(allJds.data);
    };
    fetchAllData();
  }, []);

  const pieData = [
    { name: "Usuarios", value: users.length },
    { name: "Emrpesas", value: companies.length },
  ];

  const pieColors = ["#0088FE", "#FFBB28"];

  return (
    <div className="p-10 divide-black">
      <h1 className="ml-10 text-3xl">Usuarios</h1>
      <hr className="mt-2 mb-5 w-[90%] translate-x-10" />
      <div className="flex flex-row ml-10 gap-7">
        <div className="flex flex-col-reverse">
          <StatisticsCard
            color="#95df4a"
            text="Cantidad de usuarios registrados en la web"
            value={users.length + companies.length}
          />
          <StatisticsCard
            color="#FFBB28"
            text="Empresas"
            value={companies.length}
          />
          <StatisticsCard
            color="#0088FE"
            text="Usuarios"
            value={users.length}
          />
          <div>
            <PieChart width={350} height={150}>
              <Pie
                data={pieData}
                dataKey="value"
                cx={180}
                cy={100}
                startAngle={180}
                endAngle={0}
                fill="#8884d8"
                paddingAngle={5}
                innerRadius={60}
                outerRadius={80}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={pieColors[index % pieColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col justify-center">
            <StatisticsCard
              color="#D6D6D6"
              text="Usuarios registrados el último mes"
              value={
                users.filter(
                  (user) =>
                    new Date(user.createdDate).getMonth() ===
                    currentDate.getMonth()
                ).length
              }
            />
            <StatisticsCard
              color="#D6D6D6"
              text="Empresas registrados el último mes"
              value={
                companies.filter(
                  (company) =>
                    new Date(company.createdDate).getMonth() ===
                    currentDate.getMonth()
                ).length
              }
            />
            <StatisticsCard
              color="#D6D6D6"
              text="Usuarios registrados en el año actual"
              value={
                users.filter(
                  (user) =>
                    new Date(user.createdDate).getFullYear() ===
                    currentDate.getFullYear()
                ).length
              }
            />
            <StatisticsCard
              color="#D6D6D6"
              text="Empresas registrados el año actual"
              value={
                companies.filter(
                  (company) =>
                    new Date(company.createdDate).getFullYear() ===
                    currentDate.getFullYear()
                ).length
              }
            />
          </div>
          <div className="flex flex-col justify-center">
            <StatisticsCard
              color="#D6D6D6"
              text="Tipo de registro mas usado"
              value={mostUsedProvider(users, companies) ?? "..."}
            />
            <StatisticsCard
              color="#D6D6D6"
              text="País con mayor registro de usuarios"
              value={mostRepeatedCountry(users)}
            />
            <StatisticsCard
              color="#D6D6D6"
              text="País con mayor registro de empresas"
              value={mostRepeatedCountry(companies)}
            />
            <StatisticsCard
              color="#D6D6D6"
              text="Interés principal de empresas"
              value={mostRepeatedInterest(companies)}
            />
          </div>
          <div className="flex flex-col w-[50px] justify-around">
            {[1, 2, 3, 4].map((x) => (
              <img key={x} src={graphIcon} className="hover:cursor-pointer" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
