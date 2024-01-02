import {AccordionStatisticsOKRsLinkIt, AccordionStatisticsOKRsSales,AccordionStatisticsOKRsQ4Recruiting,AccordionStatisticsRecruiting} from './AcordionStatisticsOKRs'


export default function StatisticsOKRs() {

  return (
    <div>  
      <div className="bg-linkIt-500 justify-center p-[7%]">
        <h4 className="text-black text-[3vw] font-manrope font-bold text-center">LinkIT</h4>
        <AccordionStatisticsOKRsLinkIt/>
        <h4 className="text-black text-[3vw] font-manrope font-bold text-center">Sales</h4>
        <AccordionStatisticsOKRsSales/>
        <h4 className="text-black text-[3vw] font-manrope font-bold text-center">Q4 - Recruiting</h4>
        <AccordionStatisticsOKRsQ4Recruiting/>
        <h4 className="text-black text-[3vw] font-manrope font-bold text-center">Recruiting</h4>    
        <AccordionStatisticsRecruiting/>        
      </div>
    </div>
            
  )
}

