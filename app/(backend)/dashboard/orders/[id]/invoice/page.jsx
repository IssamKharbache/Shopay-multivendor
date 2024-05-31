import SalesInvoice from "@/components/backoffice/order/SalesInvoice";
import { getData } from "@/lib/getData";
const page = async ({ params: { id } }) => {
  const order = await getData(`orders/${id}`);

  return (
    <div className="flex flex-col">
      <SalesInvoice order={order} />
    </div>
  );
};

export default page;
