import { useState } from "react";

type Props = {
  columns: { label: string; accessor: string }[];
  handleSorting: (sortField: string, sortOrder: string) => void;
};

export const TableHead = ({ columns, handleSorting }: Props) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortChange = (accessor: string) => {
    const sortOrder = accessor === sortField && order === "asc" ? "des" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead className="text-[#54D3C2]">
      <tr>
        {columns.map(({ label, accessor }, i) => (
          <th
            key={i}
            className="border py-2 cursor-pointer hover:bg-[#E5F8F6]"
            onClick={() => handleSortChange(accessor)}
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
};
