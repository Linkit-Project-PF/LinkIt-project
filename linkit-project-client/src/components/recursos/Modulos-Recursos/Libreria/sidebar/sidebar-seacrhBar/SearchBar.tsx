import "./SearchBar.css";

function SearchBar() {
  return (
    <>
      <div className="flex items-center justify-between border-[1.5px] border-linkIt-400 w-[17rem] h-[2.8rem] rounded-[10px]">
        <input
          type="text"
          name="searchBar"
          className=" border-none placeholder:text-black grow font-montserrat focus:outline-none text-left w-[10rem] pl-[.8rem] placeholder:font-[600] font-[600]"
          placeholder="Buscar recursos"
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
