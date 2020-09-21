import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { sampleDay, sampleWeek } from '../testData'
import { getImageByDate, getAllImages } from '../APICalls.js'
jest.mock('../APICalls')

describe('App Snapshots', () => {
  it('should render a landing page on initialization', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const landingImage = screen.getByAltText('Image of Jupiter')

    expect(landingImage).toBeInTheDocument()
  })

  it('should render the image of the data after 4 seconds', async() => {
    getAllImages.mockResolvedValue(sampleWeek)

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const todayImage = await waitFor(() => screen.getByAltText('test'))

  })
});
