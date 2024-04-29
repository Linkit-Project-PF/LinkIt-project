import { useTranslation } from "react-i18next";
//import { CLOUDINARY_ID } from "../../../../../env";

const CLOUDINARY_ID = import.meta.env.VITE_CLOUDINARY_ID;

export default function PDFViewer({ cv }: any) {
    const { t } = useTranslation();
    const ID = cv.cloudinaryId;
    const NAME = cv.fileName.trim();
    const pdfUrl = `https://res.cloudinary.com/${CLOUDINARY_ID}/image/upload/${ID}/${NAME}`;

    const handleOpenInNewTab = () => {
        window.open(pdfUrl, '_blank');
    };

    return (
        <div>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" onClick={handleOpenInNewTab}>
                {t("Ver PDF ")}
            </a>
        </div>
    );
}
