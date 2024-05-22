import DataTable from "@/components/dataDableComponents/data-table";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import { columns } from "./columns";

const page = async () => {
  const Allcustomers = await getData("customers");

  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }

  const sessionId = session?.user?.id;
  const role = session?.user?.role;
  return (
    <div>
      {/* HEADER */}

      {/* TABLE */}
      {/* TABLE */}
      <div className="px-6">
        <DataTable data={Allcustomers} columns={columns} />
      </div>
    </div>
  );
};

export default page;
