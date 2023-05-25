import { IUser } from "@/data";
import { useState, useEffect } from "react";

export const useFilter = (data: IUser[]) => {
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleSorting = (sortField: string, sortOrder: string) => {
    if (sortField) {
      const sortedData = [...tableData].sort((a, b) => {
        return (
          a[sortField as keyof IUser]
            .toString()
            .localeCompare(b[sortField as keyof IUser].toString(), "en", {
              numeric: true,
            }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sortedData);
    }
  };
  return { tableData, handleSorting };
};
