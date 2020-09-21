export const getImageByDate = async (date) => {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&hd=true&date=${date}`)
  const data = await response.json()

  return data
}

export const getAllImages = async (prevWeek) => {
  let thisWeekImages = []
  for (let day of prevWeek) {
      let dayImage = await getImageByDate(day)
      thisWeekImages.push(dayImage)
  }
  return thisWeekImages
}
