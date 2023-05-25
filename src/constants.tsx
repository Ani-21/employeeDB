import {
  ArchiveIcon,
  CalendarIcon,
  ChartIcon,
  EmployeesIcon,
  ScheduleIcon,
  SettingsIcon,
  StorageIcon,
} from "./components/icons";

export const menu = [
  {
    title: "База анкет сотрудников",
    icon: <ArchiveIcon />,
  },
  {
    title: "Календарь событий",
    icon: <CalendarIcon />,
  },
  {
    title: "Отчеты",
    icon: <ChartIcon />,
  },
  {
    title: "Общая база сотрудников",
    icon: <EmployeesIcon />,
  },
  {
    title: "База сотрудников",
    icon: <ScheduleIcon />,
  },
  {
    title: "Найтройки",
    icon: <SettingsIcon />,
  },
  {
    title: "Архивы",
    icon: <StorageIcon />,
  },
];

export const columns = [
  { label: "№", accessor: "" },
  { label: "Имя", accessor: "fullName" },
  { label: "ID", accessor: "_id" },
  { label: "Телефон", accessor: "phone" },
  { label: "Пол", accessor: "sex" },
  { label: "Дата рождения", accessor: "birthday" },
  { label: "Метро", accessor: "subway" },
  { label: "Адрес Проживания", accessor: "streetAddress" },
];
