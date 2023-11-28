const getCroppedImageUrl = (url: string) => {
  if (!url) return "https://i.ibb.co/ZKhSLVX/image-placeholder.webp";

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
