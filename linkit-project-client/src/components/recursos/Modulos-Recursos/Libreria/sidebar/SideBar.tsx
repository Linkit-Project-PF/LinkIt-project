import "./Sidebar.css";
import SearchBar from "./sidebar-seacrhBar/SearchBar";
import { setFilterResources } from "../../../../../redux/features/ResourcesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function SideBar() {
  type resourcesState = {
    resources: {
      allresources: resourceType[];
      resources: resourceType[];
      blogs: resourceType[];
      ebooks: resourceType[];
      events: resourceType[];
      categories?:[]
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

  const allResources = useSelector((state: resourcesState) => state.resources.allresources);
  const uniqueResourcesTypes = Array.from(new Set(allResources.map(item => item.category)));
  uniqueResourcesTypes.unshift("todos");



  const { t } = useTranslation();
  const [active, setActive] = useState("");

  const dispatch = useDispatch();

  const handleActive = (index: string) => {
    setActive(index);
  };

  const handleFilter = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLLIElement;
    dispatch(setFilterResources(target.textContent));
  };


  return (
    <div className="font-montserrat">
      <p className="font-bold mt-[3rem] text-[1.7rem] mb-[2rem]">
        {t("Buscar")}
      </p>
      <SearchBar setActive={setActive} />
      <p className="font-bold mt-[2rem] text-[1.7rem]">{t("Temas")}</p>
      <ul className="flex flex-col gap-[1rem] font-[500] mt-[2rem]">
        {uniqueResourcesTypes.map((item, index) => (
          <li
            className={`list-item-resource${
              active === index.toString() ? "-active" : ""
            } cursor-pointer inline-flex uppercase`}
            onClick={(event) => {
              handleActive(index.toString()), handleFilter(event);
            }}
            key={index}
            value={item}
          >
            {t(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
