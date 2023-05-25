import { IUser } from "@/data";

type Props = {
  columns: { label: string; accessor: string }[];
  entries: IUser[];
};
export const TableBody = ({ columns, entries }: Props) => {
  return (
    <tbody>
      {entries.map((data, i) => (
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
