import Image from "next/image";
import { Inter } from "next/font/google";
<<<<<<< HEAD
import UserTable from "@/components/userTable";
=======
import UserTable from "@/components/Table/userTable";
>>>>>>> 6c4bd96c5828dd40a396adc2bab6e1a3d2a6d540

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center items-center p-10">
      <UserTable />
    </div>
  );
}
