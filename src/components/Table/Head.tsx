const columns = [
  { label: "№", accessor: "id" },
  { label: "Имя", accessor: "name" },
  { label: "ID номер", accessor: "idName" },
  { label: "Телефон", accessor: "phone" },
  { label: "Пол", accessor: "sex" },
  { label: "Дата рождения", accessor: "birthYear" },
  { label: "Метро", accessor: "subway" },
  { label: "Адрес Проживания", accessor: "address" },
];

export const TableHead = () => {
  return (
    <thead className="text-[#54D3C2]">
      <tr>
        {columns.map(({ label }) => (
          <th className="border py-2">{label}</th>
        ))}
      </tr>
    </thead>
  );
};
