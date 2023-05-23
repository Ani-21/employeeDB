import { MainPage } from "./pages/Main";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainPage />
    </div>
  );
};
