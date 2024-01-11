
export default function PDFViewer({ cv } : any) {
    const ID = cv.cloudinaryId
    const NAME = cv.fileName
    const pdfUrl = `https://res.cloudinary.com/dquhriqz3/image/upload/${ID}/${NAME}`;
    return (
        <div>
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                Ver PDF
            </a>
        </div>
    );
}