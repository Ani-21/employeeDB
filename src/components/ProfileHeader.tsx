import { menu } from "@/constants";

export const ProfileHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center h-38 px-5">
      <div className="flex gap-2 ">
        <button className="rounded-full w-10 h-10 bg-slate-200">{"<"}</button>
        <button className="rounded-full w-10 h-10 bg-slate-200">{">"}</button>
      </div>
      <nav className="flex">
        <ul className="flex flex-row justify-between items-center list-none">
          {menu.map((item, i) => (
            <li
              key={i}
              className="my-4 py-2 px-2 rounded-md cursor-pointer hover:bg-[#A9E9E0]"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center">
        <div className="flex flex-col">
          <p>Kristina</p>
          <p>Менеджер продаж</p>
        </div>
      </div>
    </div>
  );
};
