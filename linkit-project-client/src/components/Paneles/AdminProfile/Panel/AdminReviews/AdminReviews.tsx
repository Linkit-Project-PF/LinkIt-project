import { useTranslation } from "react-i18next"

export default function AdminReviews() {
  const {t}=useTranslation()
  return (
    <div>
        <h1 className="text-5xl pl-32 pb-4">{t('Gestión de reseñas')}</h1>
    </div>
  )
}
