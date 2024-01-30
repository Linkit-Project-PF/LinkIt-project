import { Route, Routes } from "react-router-dom";
import HeadStatitics from "./HeadStatistics";
import StatisticsWeb from "./Statics/StatisticsWeb";
// TODO Complete and uncomment
// import StatisticsPostulaciones from './Statics/StatisticsPostulaciones'
// import StatisticsPresentation from './Statics/StatisticsPresentation'
// import StatisticsFollowUps from './Statics/StatisticsFollowUps'
import StatisticsOKRs from "./Statics/statisticsOKRs/StatisticsOKRs";
import { t } from "i18next";

export default function Statistics() {
  return (
    <div className="bg-linkIt-500 mx-12 rounded-[20px] w-auto p-3">
      <h1 className="text-4xl pl-16 py-6">{t("Estadísticas")}</h1>
      <HeadStatitics />
      <Routes>
        <Route path="statistics/OKRs" element={<StatisticsOKRs />} />
        {/* TODO WORKING HERE AS FOR MORE STATISTICS, Working now on FollowUp*/}
        {/* <Route path="statistics/postulaciones" element={<StatisticsPostulaciones />} />
                <Route path="statistics/followUps" element={<StatisticsFollowUps />} />
                <Route path="statistics/presentation" element={<StatisticsPresentation />} /> */}
        <Route path="statistics/Web" element={<StatisticsWeb />} />
      </Routes>
      <br />
    </div>
  );
}
