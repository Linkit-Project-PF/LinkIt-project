import { CLOUDINARY_ID } from "../../../../../env";


export default function PDFViewer({ cv }: any) {
    const ID = cv.cloudinaryId;
    const NAME = cv.fileName.trim();
    const pdfUrl = `https://res.cloudinary.com/${CLOUDINARY_ID}/a_${ID}/${NAME}`;

    const handleOpenInNewTab = () => {
        window.open(pdfUrl, '_blank');
    };

    return (
        <div>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" onClick={handleOpenInNewTab}>
                Ver PDF 
            </a>
        </div>
    );
}
