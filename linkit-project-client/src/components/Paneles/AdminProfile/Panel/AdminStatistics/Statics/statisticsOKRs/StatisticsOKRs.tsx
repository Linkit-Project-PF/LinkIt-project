import { AccordionOKRs } from "./AcordionStatisticsOKRs";
import { useState } from "react";
import FormStatisticsOKRs from "./FormStatisticsOKRs";
import { t } from 'i18next'

export default function StatisticsOKRs() {

 
  //? FORM
  const [viewForm, setViewForm] = useState(false);
  
  const showForm = () => {
    setViewForm(true);
  };
  const noShowForm = () => {
    setViewForm(false);
  };

  return (
    <div>
      <div  className=' flex flex-row justify-around'>
      
        <button
          className="flex items-center border border-linkIt-300 rounded-[7px] p-2 shadow-md hover:border-linkIt-200 transition-all duration-300 ease-in-out mr-5"
          onClick={showForm}
        >
          {t('Crear OKR')}
        </button>
      </div>

      {viewForm && <FormStatisticsOKRs 
        onClose={noShowForm} 
      />}

      <div className="bg-linkIt-500 justify-center p-[7%]">
        <AccordionOKRs />
      </div>
    </div>
  );
}
