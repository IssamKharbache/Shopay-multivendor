import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
let router;
const UseRouter = () => {
  router = useRouter();
};

const handleLogout = async () => {
  await signOut();
  router?.push("/");
  toast.success("Logged out successfully");
};

export default handleLogout;
