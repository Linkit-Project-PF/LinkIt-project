import { useTranslation } from 'react-i18next';
export default function Unauthorized() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-column justify-center content-center h-screen">
      <h1 className="h-1/3 self-center font-bold">
        {t('NO TIENES AUTORIZACION PARA ACCEDER A ESTA RUTA')}
      </h1>
    </div>
  );
}