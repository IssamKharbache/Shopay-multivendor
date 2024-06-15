"use client";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "flowbite-react";
//ICONS
import { IoIosHelpCircleOutline } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BiSolidTruck } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa";
import { HiMiniChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { X } from "lucide-react";

export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="flex items-center space-x-1  text-blue-600 hover:text-blue-900 dark:text-gray-200 dark:hover:text-gray-400  duration-200 "
      >
        <IoIosHelpCircleOutline size={25} />
        <span className="font-semibold text-lg">Help</span>
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>You need help ? </Modal.Header>
        <Modal.Body>
          {/* BODY HERE */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 font-semibold">
            {/* LINKS AND ICONS */}
            <Link
              href="#"
              className="flex items-center space-x-1 text-gray-900 dark:text-gray-200   hover:opacity-70 duration-200 text-xl gap-4"
            >
              <div className="flex justify-center items-center bg-gray-400 dark:bg-gray-800 rounded-full h-8 w-8">
                <TfiHeadphoneAlt />
              </div>

              <span className="text-lg ">Call Us +212 625 7765 78</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-1 text-gray-900 dark:text-gray-200 hover:opacity-70 duration-200 text-xl gap-4"
            >
              <div className="flex justify-center items-center bg-gray-400 dark:bg-gray-800 rounded-full h-8 w-8">
                <BiSolidTruck />
              </div>

              <span className="text-lg ">Track Your Orders</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-1 text-gray-900 dark:text-gray-200  hover:opacity-70  duration-200 text-xl gap-4"
            >
              <div className="flex justify-center items-center bg-gray-400 dark:bg-gray-800 rounded-full h-8 w-8">
                <FaDollarSign />
              </div>

              <span className="text-lg ">Returns & Refunds</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-1 text-gray-900 dark:text-gray-200  hover:opacity-70 duration-200 text-xl gap-4"
            >
              <div className="flex justify-center items-center bg-gray-400 dark:bg-gray-800 rounded-full h-8 w-8">
                <HiMiniChatBubbleOvalLeftEllipsis />
              </div>

              <span className="text-lg ">Contact Us</span>
            </Link>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* Footer here */}
          <button
            className="bg-red-500 flex items-center gap-2 text-white p-3 rounded-lg hover:bg-red-600 duration-300"
            onClick={() => setOpenModal(false)}
          >
            <span>Close</span>
            <X size={20} />
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
