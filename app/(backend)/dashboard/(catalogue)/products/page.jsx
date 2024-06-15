import PageHeader from "@/components/backoffice/PageHeader";

import { getData } from "@/lib/getData";
import { columns } from "./columns";
import DataTable from "@/components/dataDableComponents/data-table";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import AccessDenied from "@/components/AccessDenied";

const Products = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    const products = [];
    return null;
  }

  const sessionId = session?.user?.id;
  const role = session?.user?.role;
  const productsData = await getData("products");

  const farmerProduct = productsData.filter(
    (product) => product.userId === sessionId
  );

  if (role === "USER") {
    return <AccessDenied />;
  }
  return (
    <div>
      {/* HEADER */}
      <PageHeader
        heading="Products"
        link="/dashboard/products/new"
        buttonTitle="Add Product"
      />
      {/* TABLE */}
      <div className="px-6">
        {role === "ADMIN" ? (
          <DataTable
            data={productsData}
            columns={columns}
            filterKeys={["title"]}
          />
        ) : (
          <DataTable
            data={farmerProduct}
            columns={columns}
            filterKeys={["title"]}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
