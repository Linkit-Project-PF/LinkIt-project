import { useTranslation } from 'react-i18next'
import Carrusel from "./Carrusel";


export default function ModuloC() {
  const { t } = useTranslation();
    return (
      <div>
          <h1 className="flex justify-center font-bold text-sm m-6 md:text-2xl lg:text-3xl lg:my-12 xl:text-4xl xl:m-16 2xl:text-5xl 2xl:m-24">{t('Más de 500 empresas confían en LinkIT')}</h1>
          <Carrusel />
      </div>
    )
}