import { Route, Routes } from 'react-router-dom'
import HeadStatitics from './HeadStatistics'
import StatisticsWeb from './Statics/StatisticsWeb'
import StatisticsPostulaciones from './Statics/StatisticsPostulaciones'
import StatisticsPresentation from './Statics/StatisticsPresentation'
import StatisticsOKRs from './Statics/StatisticsOKRs'
import StatisticsFollowUps from './Statics/StatisticsFollowUps'
import { t } from 'i18next'

export default function Statistics() {
    return (
        <div className="bg-linkIt-500 mx-12 rounded-[20px] rounded-b-none w-auto">
            <h1 className="text-4xl pl-16 py-6">{t("Estadísticas")}</h1>
            <HeadStatitics />
            <Routes>
                <Route path="/" element={<StatisticsWeb />} />
                <Route path="statistics/postulaciones" element={<StatisticsPostulaciones />} />
                <Route path="statistics/followUps" element={<StatisticsFollowUps />} />
                <Route path="statistics/presentation" element={<StatisticsPresentation />} />
                <Route path="statistics/OKRs" element={<StatisticsOKRs />} />
            </Routes>
            <br />
        </div>
    )
}
