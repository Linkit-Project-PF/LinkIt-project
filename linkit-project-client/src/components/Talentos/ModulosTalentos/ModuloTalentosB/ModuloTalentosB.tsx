import Carrusel from "../../../Home/Modulos/ModuloE/Carrusel/Carrusel";
import { useTranslation } from "react-i18next";

export default function ModuloTalentosB() {
  const {t} = useTranslation();
  return (
    <div className="pb-32">
        <h1 className="flex justify-center text-5xl font-bold my-20">{t('Más de 500 empresas confían en LinkIT')}</h1>
        <Carrusel/>
    </div>
  )
}