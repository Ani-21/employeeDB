import { ProfileHeader } from "@/components/ProfileHeader";
import { Searchbar } from "@/components/Searchbar";
import { Table } from "@/components/Table";

export const MainPage = () => {
  return (
    <div className="w-full flex flex-col">
      <ProfileHeader />
      <section className="bg-[#F5F5F5] p-5 rounded-l-lg h-screen">
        <h1 className="text-black text-3xl">Общая база сотрудников</h1>
        <Searchbar />
        <Table />
      </section>
    </div>
  );
};
