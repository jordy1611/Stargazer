import { apiKey } from './APIKey.js'

export const getDemoImage = async() => {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
  const data = await response.json()
  return data
}

export const getImageToday = async() => {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
  const data = await response.json()
  return data
}

export const getImageByDate = async(date) => {
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
  const data = await response.json()

  return data
}
