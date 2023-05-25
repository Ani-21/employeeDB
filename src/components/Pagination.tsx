type Props = {
  indexOfFirstUser: number;
  indexOfLastUser: number;
  usersPerPage: number;
  totalLength: number;
  handleSwitchPage: (page: number) => void;
  handleUsersPerPage: (users: number) => void;
};

export const Pagination = ({
  indexOfFirstUser,
  indexOfLastUser,
  usersPerPage,
  totalLength,
  handleSwitchPage,
  handleUsersPerPage,
}: Props) => {
  let counter = 0;
  const pages = new Array(Math.ceil(totalLength / usersPerPage))
    .fill(null)
    .map((_) => (counter += 1));

  return (
    <div className="flex flex-row justify-between items-center px-2 py-4">
      <p>
        показано {`${indexOfFirstUser}-${indexOfLastUser}`} из {totalLength}{" "}
        результатов
      </p>
      <ul className="flex flex-row justify-center items-center gap-2">
        {pages.map((page) => (
          <li className="cursor-pointer" onClick={() => handleSwitchPage(page)}>
            {page}
          </li>
        ))}
      </ul>
      <div className="inline-block flex-row gap-1">
        <label htmlFor="per-page">отображать на странице</label>
        <select name="users" id="per-page" className="px-3 py-2 rounded-xl">
          {[10, 20, 30].map((item) => (
            <option value={item} onChange={() => handleUsersPerPage(item)}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
