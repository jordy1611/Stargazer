export const getImageByDate = async (date) => {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${date}`)
  const data = await response.json()

  return data
}
