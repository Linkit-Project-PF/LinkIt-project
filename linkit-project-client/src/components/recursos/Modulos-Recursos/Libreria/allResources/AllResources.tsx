import "./AllResources.css";
import { useSelector } from "react-redux";
import BlogsCard from "../../blogs/blogs-cards/BlogsCard";
import EbookResourcesCard from "../allResources/resources-cards/Ebookresources/EbookResourcesCard";
import EventCard from "../../eventos/Events-cards/EventCard";

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

  return (
    <>
      <div className="grid grid-cols-3 grid-rows-3 gap-x-[1rem] space-y-5">
        {ebooks.map((ebook: resourceType) => {
          return (
            <div className="w-[17rem]">
                <EbookResourcesCard
                  key={ebook._id}
                  title={ebook.title}
                  description={ebook.description}
                  category={ebook.category}
                  link={ebook.link}
                />
            </div>
          );
        })}

        {blogs.map((blog: resourceType) => {
          return (
            <div className="w-[17rem]">
                <BlogsCard
                  key={blog._id}
                  image={blog.image}
                  title={blog.title}
                  description={blog.description}
                  genre={blog.category}
                  link={blog.link}
                />
            </div>
          );
        })}

        {events.map((event: resourceType) => {
          return (

            <div className="w-[17rem]">
                <EventCard
                  key={event._id}
                  image={event.image}
                  title={event.title}
                  description={event.description}
                  category={event.category}
                  link={event.link}
                />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllResources;
