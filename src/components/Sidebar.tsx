import { LogoIcon } from "./icons";
import { menu } from "@/constants";

export const Sidebar = () => {
  return (
    <nav className="gradient px-5 justify-between items-center">
      <div className="flex-initial justify-center items-center my-4">
        <LogoIcon />
      </div>
      <ul className="flex flex-col justify-between items-center list-none">
        {menu.map((item) => (
          <li className="my-4 py-2 px-2 rounded-md cursor-pointer hover:bg-[#A9E9E0]">
            {item.icon}
          </li>
        ))}
      </ul>
    </nav>
  );
};
