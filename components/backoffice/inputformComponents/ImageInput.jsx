import { UploadDropzone } from "@/lib/uploadThing";
import { Pencil } from "lucide-react";
import Image from "next/image";

import { toast } from "sonner";

export default function ImageInput({
  label,
  imageUrl = "",
  setImageUrl,
  className = "sm:col-span-2 font-poppins",
  endpoint = "imageUploader",
  getValue,
}) {
  let isUploading = false;

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4 ">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300 mb-2"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="flex space-x-2 bg-slate-500 hover:bg-slate-600  dark:bg-slate-900 rounded-md shadow text-slate-50  p-3 dark:hover:bg-slate-700 duration-200"
          >
            <Pencil className="w-5 h-5" />
            <span className="hidden sm:block">Change Image</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Item image"
          width={1000}
          height={667}
          className="w-full h-64 object-contain"
        />
      ) : (
        <UploadDropzone
          onUploadProgress={() => console.log("Uploading")}
          onUploadBegin={() => {
            isUploading = true;
            if (getValue) {
              getValue(isUploading);
            }
          }}
          className="border-2 rounded-lg p-4 border-dashed border-slate-500 cursor-pointer"
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            isUploading = false;
            if (getValue) {
              getValue(isUploading);
            }
            setImageUrl(res[0].url);
            // Response handling

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
