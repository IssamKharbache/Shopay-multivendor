"use client";
//ICONS
import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumbs = () => {
  const pathName = usePathname();

  // Split the pathname by slashes and filter out empty strings
  const segments = pathName.split("/").filter((segment) => segment);

  // Convert all segments to kebab-case
  const kebabCaseSegments = segments.map((segment) =>
    segment.replace(/([A-Z])/g, "-$1").toLowerCase()
  );

  return (
    <nav className="flex py-4  justify-center">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm gap-2 font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <IoHome />
            Home
          </Link>
        </li>
        <li className="flex">
          {kebabCaseSegments.map((segment, i) => {
            return (
              <div key={i} className="flex items-center">
                <IoIosArrowForward className="rtl:rotate-180 w-5 h-5 text-gray-400 mx-1" />
                <p className="ms-1 text-sm font-medium text-gray-700  md:ms-2 dark:text-gray-400 ">
                  {segment}
                </p>
              </div>
            );
          })}
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
