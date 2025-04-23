import { motion, Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type BlogsCardProps = {
  image: string;
  title: string;
  description: string;
  _id: string;
  genre: string;
  isEditing?: boolean;
  createdDate?: string;
};

const blogsCardVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.2, type: "spring" },
  },
  exit: { x: -100, transition: { duration: 1, delay: 0.2, type: "spring" } },
};

function BlogsCard({
  image,
  title,
  description,
  _id,
  genre,
  isEditing,
  createdDate,
}: BlogsCardProps) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const navigate = useNavigate();

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      navigate(`/blog/${_id}/${generateSlug(title)}`);
    }, 500);
  };

  // Generar el esquema JSON-LD para el blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    datePublished: createdDate,
    author: {
      "@type": "Person",
      name: "LinkIt",
    },
    publisher: {
      "@type": "Organization",
      name: "LinkIt",
      logo: {
        "@type": "ImageObject",
        url: "https://www.linkit-hr.com/Linkit-logo/linkit-logo-2024-blue.svg",
      },
    },
    image: `https://res.cloudinary.com/dquhriqz3/image/upload/${image}`,
    url: `${window.location.origin}/blog/${_id}/${generateSlug(title)}`,
    articleSection: genre,
    inLanguage: currentLanguage, // Idioma del contenido
    about: [
      {
        "@type": "Thing",
        name: currentLanguage === "es" ? "Empresas" : "Companies",
      },
      {
        "@type": "Thing",
        name: currentLanguage === "es" ? "Talentos IT" : "IT Talents",
      },
    ],
    audience: [
      {
        "@type": "Audience",
        audienceType:
          currentLanguage === "es" ? "Latinoamérica" : "Latin America",
      },
      {
        "@type": "Audience",
        audienceType: currentLanguage === "es" ? "Europa" : "Europe",
      },
    ],
  };

  return (
    <motion.article
      className="border-2 w-[12rem] xs:w-[16rem] ssm:w-[25rem] sm:w-[29rem] md:w-[32rem] lg:w-full h-fit rounded-xl font-montserrat bg-white dark:border-linkIt-400"
      variants={isEditing ? {} : blogsCardVariants}
      initial={isEditing ? {} : "hidden"}
      animate={isEditing ? {} : "visible"}
      whileHover={isEditing ? {} : { scale: 1.02, cursor: "pointer" }}
      whileTap={isEditing ? {} : { scale: 1 }}
      exit="exit"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>
      {/* Metadatos adicionales con itemProp */}
      <meta itemProp="datePublished" content={createdDate} />
      <meta itemProp="author" content={"LinkIt"} />
      <meta itemProp="publisher" content="LinkIt" />
      <meta
        itemProp="url"
        content={`${window.location.origin}/blog/${_id}/${generateSlug(title)}`}
      />

      <button onClick={handleClick} className="w-full">
        <img
          src={`https://res.cloudinary.com/dquhriqz3/image/upload/${image}`}
          alt={`Imagen destacada del blog: ${title}`}
          className="w-full rounded-lg aspect-video bg-cover bg-center"
          itemProp="image"
        />
      </button>
      <div className="grid grid-rows-4 items-center justify-items-start gap-[5%] h-[16rem] ssm:h-[23rem] md:h-[26rem] lg:h-[20rem] xl:h-[27rem] 2xl:h-[24rem] p-[7%]">
        <div className="flex flex-col">
          <p
            className="border-[1px] text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] lg:text-[0.8rem] h-fit border-linkIt-300 rounded-[7px] p-1 mb-2 xs:mb-3 font-semibold"
            itemProp="articleSection"
          >
            {genre}
          </p>
        </div>

        <h2
          className="font-bold subtitles-size line-clamp-3 text-left"
          itemProp="headline"
        >
          {title}
        </h2>
        <p
          className="font-semibold text-size text-ellipsis overflow-clip line-clamp-3 text-left"
          itemProp="description"
        >
          {description}
        </p>
        <a
          href={`/blog/${_id}/${generateSlug(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.5rem] xs:text-[0.6rem] ssm:text-[0.8rem] md:text-[1rem] font-bold mt-2 xs:mt-3 place-self-end justify-self-start"
          itemProp="url"
        >
          {t("Leer Nota")}
        </a>
      </div>
    </motion.article>
  );
}

export default BlogsCard;
