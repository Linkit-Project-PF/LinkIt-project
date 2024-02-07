import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchResources } from "../../../../../../redux/features/ResourcesSlice";
import { useTranslation } from "react-i18next";
import "./SearchBar.css";

type SearchBarProps = {
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({setActive}: SearchBarProps) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    dispatch(setSearchResources(event.target.value));
    setActive("0")
  }

  return (
    <>
      <div className="flex items-center justify-between border-[1.5px] border-linkIt-400 w-[17rem] h-[2.8rem] rounded-[10px]">
        <input
          type="text"
          name="searchBar"
          className=" border-none placeholder:text-black grow bg-transparent focus:outline-none focus:ring-0 focus:border-none font-montserrat text-left w-[10rem] pl-[.8rem] placeholder:font-[600] font-[600]"
          placeholder={t("Buscar recursos")}
          value={search}
          onChange={handleChange}
        />
        <button>
          <img
            src="/Vectores/search-icon.svg"
            alt="search-icon"
            className="w-[2rem] pr-[.5rem]"
          />
        </button>
      </div>
    </>
  );
}

export default SearchBar;
