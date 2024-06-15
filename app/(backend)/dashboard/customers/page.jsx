import DataTable from "@/components/dataDableComponents/data-table";
import { authOptions } from "@/lib/authOptions";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import { columns } from "./columns";
import AccessDenied from "@/components/AccessDenied";

const page = async () => {
  const Allcustomers = await getData("customers");

  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }

  const sessionId = session?.user?.id;
  const role = session?.user?.role;

  if (role != "ADMIN") {
    return <AccessDenied />;
  }
  return (
    <div>
      {/* TABLE */}
      <div className="px-6">
        <DataTable
          data={Allcustomers}
          columns={columns}
          filterKeys={["title"]}
        />
      </div>
    </div>
  );
};

export default page;
