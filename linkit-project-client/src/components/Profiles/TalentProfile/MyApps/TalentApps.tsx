// import { ITalentApp } from "./MyApps"
import TalentApp from "./TalentApp"

interface IComponentProps {
  // apps: ITalentApp[]
  apps: any[]
}

function TalentApps({apps}: IComponentProps) {
  let auxKey = 1;
  return (
    <div className="flex flex-col gap-8 w-full">
      {apps.map((app) => <TalentApp app={app} key={auxKey++}/>)}
    </div>
  )
  }

export default TalentApps