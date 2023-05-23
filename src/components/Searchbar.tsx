import { SearchIcon } from "./icons";

export const Searchbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-4 my-6 bg-[#ffffff] rounded-lg h-28">
      <div className="flex flex-row gap-4 items-center justify-start">
        <p>2345 контактов</p>
        <div className="flex flex-row px-8 rounded-full justify-start items-center bg-[#f5f5f5]">
          <SearchIcon />
          <input
            className="py-3 bg-transparent focus:outline-none"
            placeholder="Поиск"
          />
        </div>
      </div>
      <button className="rounded-full border-[1px] p-2 text-[#54D3C2] border-[#54D3C2] hover:bg-[#54D3C2] hover:text-[#ffffff]">
        Режим редактирования
      </button>
    </div>
  );
};
