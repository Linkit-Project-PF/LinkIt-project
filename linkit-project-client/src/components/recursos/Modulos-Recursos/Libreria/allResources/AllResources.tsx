import "./AllResources.css";
import { useSelector } from "react-redux";
import BlogResourcesCard from "../allResources/resources-cards/BlogResources/BlogResourcesCard";
import EbookResourcesCard from "../allResources/resources-cards/Ebookresources/EbookResourcesCard";
import EventResourceCard from "./resources-cards/EventResources/EventResourcesCard";
import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

const noResults: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: .8,
      type: "spring",
      delay: 0.2,
    },
  },
  exit: {
    x: 100,
    transition: {
      duration: 1,
      type: "spring",
    }
  }

};


type resourcesState = {
  resources: {
    allresources: resourceType[];
    resources: resourceType[];
    blogs: resourceType[];
    ebooks: resourceType[];
    events: resourceType[];
  };
};

type resourceType = {
  _id: string;
  id: string;
  title: string;
  description: string;
  createdDate: string;
  type: string;
  archived: boolean;
  category: string;
  image: string;
  link: string;
};

function AllResources() {
  const blogs = useSelector((state: resourcesState) => state.resources.blogs);
  const ebooks = useSelector((state: resourcesState) => state.resources.ebooks);
  const events = useSelector((state: resourcesState) => state.resources.events);

  const {t} = useTranslation();
  return (
    <>
      <div className="flex flex-row flex-wrap justify-between  mt-[3.5rem] responsive-container">
        {
          ebooks.length > 3 && blogs.length > 3 && events.length > 3 
          ?ebooks.slice(0, 3).map((ebook: resourceType) => {
          return (
            <div className="w-[21rem]" key={ebook._id}>
                <EbookResourcesCard
                  title={ebook.title}
                  description={ebook.description}
                  category={ebook.category}
                  link={ebook.link}
                />
            </div>
          );
        })
        :ebooks.map((ebook: resourceType) => {
          return (
            <div className="w-[21rem] h-[1rem]" key={ebook._id}>
                <EbookResourcesCard
                  title={ebook.title}
                  description={ebook.description}
                  category={ebook.category}
                  link={ebook.link}
                />
            </div>
          );
        })
       }

        {
          blogs.length > 3 && ebooks.length > 3 && events.length > 3
            ?blogs?.slice(0, 3).map((blog: resourceType) => {
            return (
              <div className="w-[21rem] mb-[2rem]"  key={blog._id}>
                  <BlogResourcesCard                
                    image={blog.image}
                    title={blog.title}
                    description={blog.description}
                    genre={blog.category}
                    link={blog.link}
                    _id={blog._id}
                  />
              </div>
          )})
        :blogs?.map((blog: resourceType) => {
          return (
            <div className="w-[21rem] mb-[2rem]" key={blog._id}>
                <BlogResourcesCard            
                  image={blog.image}
                  title={blog.title}
                  description={blog.description}
                  genre={blog.category}
                  link={blog.link}
                  _id={blog._id}
                />
            </div>
        )})
        }

        {
        events.length > 3 && ebooks.length > 3 && blogs.length > 3
        ?events?.slice(0,3).map((event: resourceType) => {
          return (

            <div className="w-[21rem] mb-[2rem]" key={event._id}>
                <EventResourceCard                
                  image={event.image}
                  title={event.title}
                  description={event.description}
                  category={event.category}
                  link={event.link}
                />
            </div>
          );})

        :events?.map((event: resourceType) => {
          return (

            <div className="w-[21rem] mb-[2rem]" key={event._id}>
                <EventResourceCard                 
                  image={event.image}
                  title={event.title}
                  description={event.description}
                  category={event.category}
                  link={event.link}
                />
            </div>
          );})

        }
        {
          ebooks.length === 0 && blogs.length === 0 && events.length === 0 
          &&(
          <motion.h1 
          className="text-[1.5rem] font-bold absolute left-1/2 top-[70%] "
          variants={noResults}
          initial="hidden"
          animate="visible"
          exit="exit"
          >{t('No se encontraron recursos')}
          </motion.h1>
          )
        }
      </div>
    </>
  );
}

export default AllResources;
