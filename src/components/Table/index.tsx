import { TableBody } from "./Body";
import { TableHead } from "./Head";

export const Table = () => {
  return (
    <table className="text-[#6D7986] bg-white rounded-lg w-full border-collapse border-[#F8F8F8]">
      <TableHead />
      <TableBody />
    </table>
  );
};
