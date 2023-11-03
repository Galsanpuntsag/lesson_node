import Image from "next/image";
import { Inter } from "next/font/google";
import UserTable from "@/components/userTable";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center items-center p-10">
      <UserTable />
    </div>
  );
}
