"use client";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "flowbite-react";
//ICONS
import { X } from "lucide-react";
import { IoShareSocialOutline } from "react-icons/io5";

import {
  FacebookIcon,
  FacebookShareButton,
  EmailIcon,
  EmailShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoCheckmark } from "react-icons/io5";
import { RxClipboardCopy } from "react-icons/rx";

const ProductShareButton = ({ urlToShare }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
    setIsCopied(false);
  };

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="flex items-center space-x-1 bg-slate-400 dark:bg-slate-700 text-white rounded-full py-2 px-2 transition-all translate-x-3  duration-200 cursor-pointer "
      >
        <IoShareSocialOutline className="w-4 h-4 md:w-6 md:h-6" />
      </button>
      <Modal show={openModal} onClose={closeModal}>
        <Modal.Header>Share This Product With Others</Modal.Header>
        <Modal.Body>
          {/* BODY HERE */}
          <div className="flex gap-2 justify-between">
            <div className="flex gap-2">
              <FacebookShareButton url={urlToShare}>
                <FacebookIcon className="rounded-full" />
              </FacebookShareButton>
              <EmailShareButton url={urlToShare}>
                <EmailIcon className="rounded-full" />
              </EmailShareButton>
              <WhatsappShareButton url={urlToShare}>
                <WhatsappIcon className="rounded-full" />
              </WhatsappShareButton>
              <LinkedinShareButton url={urlToShare}>
                <LinkedinIcon className="rounded-full" />
              </LinkedinShareButton>
            </div>
            <div>
              <CopyToClipboard
                text={urlToShare}
                onCopy={() => setIsCopied(true)}
              >
                {isCopied ? (
                  <button
                    disabled
                    className="flex rounded-lg items-center gap-2 bg-slate-300 dark:bg-slate-800  cursor-not-allowed mt-2 text-gray-900 dark:text-gray-200  font-semibold py-3 px-4"
                  >
                    Copied
                    <IoCheckmark />
                  </button>
                ) : (
                  <button className="flex items-center gap-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-800 dark:hover:bg-slate-900 duration-200 rounded-lg mt-2 text-gray-900 dark:text-gray-200 font-semibold py-3 px-4">
                    <RxClipboardCopy />
                    Copy Link To Clipboard
                  </button>
                )}
              </CopyToClipboard>
            </div>
          </div>

          {/* <ShareSocial
            style={style}
            url={urlToShare}
            socialTypes={["whatsapp", "twitter", "linkedin", "email"]}
          /> */}
        </Modal.Body>
        <Modal.Footer>
          {/* Footer here */}
          <button
            className="bg-red-500 flex items-center gap-2 text-white p-3 rounded-lg hover:bg-red-600 duration-300"
            onClick={closeModal}
          >
            <span>Close</span>
            <X size={20} />
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductShareButton;

const style = {
  root: {
    background: "#687387",
    borderRadius: 3,
    border: 0,

    color: "white",
  },
  copyContainer: {
    border: "1px solid 	#8b94a5",
    background: "rgb(0,0,0,0.7)",
  },
  title: {
    color: "aquamarine",
    fontStyle: "italic",
  },
};
