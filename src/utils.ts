const BASE_URL = "http://localhost:3000" // Backend URL

export const getImageUrl = (img: string) => {
  return `${BASE_URL}${img.replace("./", "/")}`
}
