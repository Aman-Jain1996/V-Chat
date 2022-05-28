import { ToastHandler } from "../../../utils/toastUtils";

export const useUploadMedia = () => {
  const uploadMedia = async (media, setDeleteToken, setMediaURL) => {
    const mediaType = media.type.split("/")[0];
    if (mediaType === "video" && Math.round(media.size / 1024000) > 10)
      ToastHandler("error", "Video size should be less than 10MB");
    else if (Math.round(media.size / 1024000) > 4)
      ToastHandler("error", "Media size should be less than 4MB");
    else {
      const data = new FormData();
      data.append("file", media);
      data.append("upload_preset", "oprdfe4j");
      const url =
        mediaType === "video"
          ? "https://api.cloudinary.com/v1_1/ajain8479/video/upload"
          : "https://api.cloudinary.com/v1_1/ajain8479/image/upload";

      const requestOptions = {
        method: "POST",
        body: data,
      };

      await fetch(url, requestOptions)
        .then((response) => response.json())
        .then((json) => {
          setDeleteToken(json.delete_token);
          setMediaURL(json.secure_url);
          ToastHandler("success", "File Uploaded!");
        })
        .catch((error) => {
          console.error(error);
          ToastHandler("error", "Error Uploading Media!");
        });
    }
  };

  const deleteMedia = async (deleteToken, setDeleteToken = () => {}) => {
    try {
      const formData = new FormData();
      formData.append("upload_preset", "oprdfe4j");
      formData.append("token", deleteToken);
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/ajain8479/delete_by_token",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.status === 200) {
        setDeleteToken("");
      }
    } catch (error) {
      console.error(error);
      setDeleteToken("");
      ToastHandler("error", "Error Removing Media!");
    }
  };

  return { uploadMedia, deleteMedia };
};
