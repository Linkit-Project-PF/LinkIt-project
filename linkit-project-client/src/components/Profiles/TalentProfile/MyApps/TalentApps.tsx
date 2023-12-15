import { ITalentApp } from "./MyApps"
import TalentApp from "./TalentApp"

interface IComponentProps {
  apps: ITalentApp[]
}

function TalentApps({apps}: IComponentProps) {
  return (
    <div>
      {apps.map((app) => <TalentApp app={app} key={`app-${app._id}`}/>)}
    </div>
  )
  }

export default TalentApps