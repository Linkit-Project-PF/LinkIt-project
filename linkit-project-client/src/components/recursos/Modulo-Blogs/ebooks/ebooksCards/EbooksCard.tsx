import './ebooksCard.css'

type EbooksCardProps = {
    title: string;
    description: string;
    link: string;
}

/**
 * Renders a card for an ebook with its title, description and download link.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the ebook.
 * @param {string} props.description - The description of the ebook.
 * @param {string} props.link - The download link of the ebook.
 * @returns {JSX.Element} - The ebook card component.
 */
function EbooksCard({title, description, link}: EbooksCardProps): JSX.Element {
    return (
        <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <a href={link}>Descargar</a>
        </div>
    )
}

export default EbooksCard