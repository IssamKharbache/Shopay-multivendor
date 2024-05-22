import { UploadDropzone } from "@/lib/uploadThing";
import { Pencil, XCircle } from "lucide-react";
import Image from "next/image";

import { toast } from "sonner";

export default function MultipleImageInput({
  label,
  imageUrls,
  setImageUrls,
  className = "sm:col-span-2 font-poppins",
  endpoint = "",
  getValue,
}) {
  let isUploading = false;

  const handleImageRemove = (imageIndex) => {
    const updatedImages = imageUrls.filter(
      (image, index) => index !== imageIndex
    );
    setImageUrls(updatedImages);
  };

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4 ">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300 mb-2"
        >
          {label}
        </label>
      </div>
      {imageUrls.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageUrls.map((imageUrl, i) => {
            return (
              <div className="relative" key={i}>
                <button
                  onClick={() => handleImageRemove(i)}
                  type="button"
                  className="absolute -right-3 -top-4 bg-red-500 rounded-full "
                >
                  <XCircle size={25} />
                </button>
                <Image
                  src={imageUrl}
                  alt="Item image"
                  width={1000}
                  height={667}
                  className="w-full h-44 object-cover"
                />
              </div>
            );
          })}
        </div>
      ) : (
        <UploadDropzone
          onUploadBegin={() => {
            isUploading = true;
            if (getValue) {
              getValue(isUploading);
            }
          }}
          className="border-2 rounded-lg p-4 border-dashed border-slate-500 cursor-pointer"
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            const urls = res.map((item, i) => item.url);
            setImageUrls(urls);

            isUploading = false;
            if (getValue) {
              getValue(isUploading);
            }
            toast.success("Image uploaded successfully");
          }}
          onUploadError={(error) => {
            // Error handling.
            isUploading = false;
            getValue(isUploading);
            console.log(`ERROR! ${error.message}`);
            toast.error("Image upload failed , try again");
          }}
        />
      )}
    </div>
  );
}
