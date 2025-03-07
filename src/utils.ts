const BASE_URL = "http://localhost:3000"

export const getImageUrl = (img: string) => {
  if (img.startsWith("https://")) {
    return img // Return as is if it's already an absolute URL
  }
  return `${BASE_URL}${img.replace("./", "/")}`
}
