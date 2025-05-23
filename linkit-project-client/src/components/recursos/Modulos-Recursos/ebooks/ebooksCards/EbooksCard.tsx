import { useEffect, useState } from "react"
import { motion, type Variants } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import "./ebooksCard.css"
import { Helmet } from "react-helmet-async"

type EbooksCardProps = {
  title: string
  description: string
  link: string
  category: string
  image?: string
  isEditing?: boolean
  createdDate?: string
  createdBy?: string
}

const cardVariants: Variants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    x: "100vw",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
}

function EbooksCard({ 
  title, 
  description, 
  link, 
  category, 
  image, 
  isEditing,
  createdDate,
  createdBy 
}: EbooksCardProps): JSX.Element {
  const [key] = useState(Math.random());
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();
    window.addEventListener("resize", handleResize); 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleClick = () => {
    if (isMobile) {
      const linkElement = document.createElement("a");
      linkElement.href = link; 
      linkElement.download = `${title}.pdf`;
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      const slug = generateSlug(title);
      const ebookData = {
        title,
        description,
        link,
        category,
        image,
        slug,
        createdDate,
        createdBy,
      };
      sessionStorage.setItem("ebookData", JSON.stringify(ebookData));

      setTimeout(() => {
        navigate(`/ebook/${slug}`, {
          state: {
            pdfUrl: link,
            title,
            description,
            category,
            image,
            createdDate,
            createdBy,
          },
        });
      }, 500);
    }
  };

  const currentLanguage = i18n.language;

  const ebookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: title,
    description: description,
    author: {
      "@type": "Person",
      name: createdBy || "LinkIt",
    },
    publisher: {
      "@type": "Organization",
      name: "LinkIt",
      logo: {
        "@type": "ImageObject",
        url: "https://www.linkit-hr.com/Linkit-logo/linkit-logo-2024-blue.svg",
      },
    },
    datePublished: createdDate,
    bookFormat: "EBook",
    image: image ? `https://res.cloudinary.com/dquhriqz3/image/upload/${image}` : undefined,
    url: `${window.location.origin}/ebook/${generateSlug(title)}`,
    genre: category,
    inLanguage: currentLanguage,
  };

  return (
    <div 
      className="border-[2px] w-[12rem] xs:w-[16rem] ssm:w-[25rem] sm:w-[29rem] md:w-[32rem] lg:w-full h-fit rounded-xl font-montserrat bg-white"
      itemScope
      itemType="https://schema.org/Book"
    >
      {/* Inyectar el esquema JSON-LD en el <head> */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(ebookSchema)}
        </script>
      </Helmet>

      {/* Metadatos adicionales con itemProp */}
      <meta itemProp="bookFormat" content="EBook/PDF" />
      <meta itemProp="inLanguage" content={currentLanguage} />
      {createdDate && <meta itemProp="datePublished" content={createdDate} />}
      <link itemProp="url" href={`${window.location.origin}/ebook/${generateSlug(title)}`} />

      {/* Información del autor/publisher si está disponible */}
      <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content="LinkIt" />
        <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
          <meta itemProp="url" content="https://www.linkit-hr.com/Linkit-logo/linkit-logo-2024-blue.svg" />
        </div>
      </div>
      {createdBy && (
        <div itemProp="author" itemScope itemType="https://schema.org/Person">
          <meta itemProp="name" content={createdBy} />
        </div>
      )}
      <motion.a
        key={key}
        className=""
        variants={isEditing ? {} : cardVariants}
        initial={isEditing ? {} : "initial"}
        animate={isEditing ? {} : "animate"}
        whileHover={isEditing ? {} : { scale: 1.02, cursor: "pointer" }}
        whileTap={isEditing ? {} : { scale: 1 }}
        exit={"exit"}
        onClick={handleClick}
      >
        <img
          src={`https://res.cloudinary.com/dquhriqz3/image/upload/${image}`}
          alt={title}
          className={`w-full rounded-lg aspect-video bg-cover bg-center`}
          itemProp="image"
        />
        <div className="grid grid-rows-4 items-center justify-items-start gap-[5%] h-[16rem] ssm:h-[23rem] md:h-[26rem] lg:h-[20rem] xl:h-[27rem] 2xl:h-[24rem] p-[7%]">
          <div className="flex flex-col">
            <span 
              className="border-[1px] text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] lg:text-[0.8rem] h-fit border-linkIt-300 rounded-[7px] p-1 mb-2 xs:mb-3 font-semibold justify-items-center"
              itemProp="genre"
            >
              {category}
            </span>
          </div>
          
          <span 
            className="font-bold subtitles-size line-clamp-3"
            itemProp="name"
          >
            {title}
          </span>
          <p 
            className="font-semibold text-size text-ellipsis overflow-clip line-clamp-3"
            itemProp="description"
          >
            {description}
          </p>
          <motion.div 
            className="text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] font-bold mt-2 xs:mt-3 place-self-end justify-self-start"
          >
            {isMobile ? t("Descargar") : t("Leer Nota")}
          </motion.div>
        </div>
      </motion.a>
    </div>
  );
}

export default EbooksCard;

