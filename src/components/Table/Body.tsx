import { data } from "@/data";

interface IUser {
  id: number;
  name: string;
  idName: number;
  phone: number;
  sex: string;
  birthYear: string;
  subway: string;
  address: string;
}

const columns = [
  { label: "ID", accessor: "id" },
  { label: "Имя", accessor: "name" },
  { label: "IDName", accessor: "idName" },
  { label: "Телефон", accessor: "phone" },
  { label: "Пол", accessor: "sex" },
  { label: "Дата рождения", accessor: "birthYear" },
  { label: "Метро", accessor: "subway" },
  { label: "Адрес Проживания", accessor: "address" },
];

export const TableBody = () => {
  return (
    <tbody>
      {data.map((data, i) => (
        <tr key={i}>
          {columns.map(({ accessor }) => {
            const tData = data[accessor as keyof IUser];
            return (
              <td className="py-4 text-center border" key={accessor}>
                {tData}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};
