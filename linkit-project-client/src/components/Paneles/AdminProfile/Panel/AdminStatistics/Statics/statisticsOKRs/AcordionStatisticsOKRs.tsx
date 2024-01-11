import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { useEffect, useState} from "react";
import { useSelector} from "react-redux"; 
import axios from "axios";
import { OKRsType } from "../../../../../admin.types";

export type stateProps = {
    resources: {
        allresources: OKRsType;
    };
}
function AccordionStatisticsOKRMErcado(){
        const token = useSelector((state: any) => state.Authentication.token);
        const [okrData, setOkrData] = useState<OKRsType[]>([]);

        useEffect(()=>{
        const loadData = async (): Promise<any> => {
            try {
                const response = await axios(
                    "https://linkit-server.onrender.com/OKRs/find",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Accept-Language': sessionStorage.getItem('lang')
                        }
                    }
                    );
                setOkrData(response.data);
                // console.log(okrData)
            } catch (error) {
                console.error("Error al cargar las información", error);
            }
        }
        loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
                <div>
                    {okrData.map((okr, index) => (
                        <div key={index}>
                            <h2 className="text-black text-[2vw] font-bold">{okr.generalTitleOKR}</h2>
                                <div>
                                    {okr.areas.map((area, areaIndex) => (
                                        <Accordion key={areaIndex} className="accordion-item">
                                            <div>
                                            <h2 className="text-black text-[1vw] font-italic">{area.name}</h2>
                                                {area.specificOKRsArea.map((specificOKRArea, specificIndex) => (
                                                    <AccordionItem key={specificIndex} header={"+  " + specificOKRArea.okrSpecificName} className="accordion-item">
                                                        <div>
                                                            {specificOKRArea.okrsSpecific.map((okrSpecificc, okrIndex) => (
                                                                <p key={okrIndex}>{okrSpecificc}</p>
                                                            ))}
                                                        </div>
                                                    </AccordionItem>
                                                ))}
                                            </div>
                                        </Accordion>
                                    ))}
                                </div>
                        </div>
                    ))}
                </div>
        </div>
    );
    
}

export {AccordionStatisticsOKRMErcado};