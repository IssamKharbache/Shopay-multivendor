import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  categoryImageUploader: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { UploadedBy: "shopay admin" };
    }),
  bannerImageUploader: f({
    image: {
      maxFileSize:
        "2MB , Height must be 384px and width 712px(Default banner size)",
      maxFileCount: 1,
    },
  })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { UploadedBy: "shopay admin" };
    }),
  marketLogoUploader: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { UploadedBy: "shopay admin" };
    }),
  productImageUploader: f({ image: { maxFileSize: "1MB", maxFileCount: 4 } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { UploadedBy: "shopay admin" };
    }),
  blogImageUploader: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { UploadedBy: "shopay admin" };
    }),
  farmerProfileImage: f({ image: { maxFileSize: "1MB" } })
    // Set permissions and file types for this FileRoute
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url, metadata);
      return { UploadedBy: "shopay admin" };
    }),
};
