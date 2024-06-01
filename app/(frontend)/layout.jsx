import Footer from "@/components/frontend/uicomponents/Footer";
import NavBar from "@/components/frontend/uicomponents/NavBar";
const layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl font-poppins min-h-screen mx-auto  px-4 lg:px-0 ">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
