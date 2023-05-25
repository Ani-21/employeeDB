import { useState } from "react";
import { columns } from "@/constants";
import { data } from "@/data";
import { useFilter } from "@/hooks/useFilter";
import { TableBody } from "./Body";
import { TableHead } from "./Head";
import { Pagination } from "../Pagination";

export const Table = () => {
  const { tableData, handleSorting } = useFilter(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = tableData.slice(indexOfFirstUser, indexOfLastUser);

  const handleSwitchPage = (page: number) => setCurrentPage(page);

  const handleUsersPerPage = (users: number) => setUsersPerPage(users);

  console.log(usersPerPage);
  return (
    <>
      <table className="text-[#6D7986] bg-white rounded-lg w-full border-collapse border-[#F8F8F8]">
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody columns={columns} entries={currentUsers} />
      </table>
      <Pagination
        indexOfFirstUser={indexOfFirstUser}
        indexOfLastUser={indexOfLastUser}
        usersPerPage={usersPerPage}
        totalLength={tableData.length}
        handleSwitchPage={handleSwitchPage}
        handleUsersPerPage={handleUsersPerPage}
      />
    </>
  );
};
