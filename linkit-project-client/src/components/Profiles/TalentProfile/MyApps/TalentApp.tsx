// import { ITalentApp } from "./MyApps";

interface IComponentProps {
  // app: ITalentApp
  app: any;
}

export default function TalentApp({ app }: IComponentProps) {
  console.log(app)
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center right-[3.5rem]">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div
            className={`w-5 h-5 ${
              app.Status === "Lost" ? "bg-red-300" : "bg-green-300"
            } rounded-full`}
          ></div>
        </div>
        <div>
          <h3 className="text-lg font-bold">{app["Role Name"]}</h3>
          <p className="text-gray-500">Abierta desde: {app.created}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6">
        <p className="text-gray-500 mt-2 sm:mt-0">
          {app.Status === "Lost" ? "Closed" : "Pending"}
        </p>
      </div>
    </div>
  );
}
