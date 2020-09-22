import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from 'react-router-dom';
import { sampleDay, sampleWeek, emptySampleWeek } from '../testData';
import { getImageByDate, getAllImages } from '../APICalls.js';
jest.mock('../APICalls');
import MutationObserver from '@sheerun/mutationobserver-shim';
window.MutationObserver = MutationObserver;

describe('App render', () => {
  it('should render a landing page on initialization', () => {
    getAllImages.mockResolvedValue(sampleWeek)
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
    jest.useFakeTimers()
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    jest.runAllTimers()

    const day1 = await waitFor(() => screen.getByAltText('Day1'))

    expect(day1).toBeInTheDocument()
  })
});

describe('App empty fetch render', () => {
  it('should render a page with no image or information when the server returns no images', async() => {
    getAllImages.mockResolvedValue(emptySampleWeek)
    jest.useFakeTimers()
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    jest.runAllTimers()

    const favoritesButton = await waitFor(() => screen.getByRole('link', {name: 'My Favorites'}))
    const day1 = await waitFor(() => screen.queryByAltText('Day1'))

    expect(favoritesButton).toBeInTheDocument()
    expect(day1).not.toBeInTheDocument()
  })
});

describe('App main page navigation', () => {
  it('should render the next image when clicking the down & up arrows', async() => {
    getAllImages.mockResolvedValue(sampleWeek)
    jest.useFakeTimers()
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    jest.runAllTimers()

    const downArrow = await waitFor(() => screen.getByTestId('down-arrow'))

    fireEvent.click(downArrow)

    const day2 = await waitFor(() => screen.getByAltText('Day2'))
    expect(day2).toBeInTheDocument()

    fireEvent.click(downArrow)

    const day3 = await waitFor(() => screen.getByAltText('Day3'))
    expect(day3).toBeInTheDocument()

    const upArrow = await waitFor(() => screen.getByTestId('up-arrow'))
    fireEvent.click(upArrow)

    expect(day2).toBeInTheDocument()
  })
})

describe('App navigation to My Favorites', () => {
  it('should display an empty favorites page when no images have been favorites', async() => {
    getAllImages.mockResolvedValue(sampleWeek)
    jest.useFakeTimers()
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    jest.runAllTimers()

    const favoritesButton = await waitFor(() => screen.getByRole('link', {name: 'My Favorites'}))
    fireEvent.click(favoritesButton)

    const favoritesText = await waitFor(() => screen.getByText('My Favorites'))
    const homeButton = await waitFor(() => screen.getByRole('link', {name: 'Home'}))
    expect(favoritesText).toBeInTheDocument()
    expect(homeButton).toBeInTheDocument()
  })

  it('should display an empty favorites page when no images have been favorites', async() => {
    getAllImages.mockResolvedValue(sampleWeek)
    jest.useFakeTimers()
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    jest.runAllTimers()

    const homeButton = await waitFor(() => screen.getByText('Home'))
    fireEvent.click(homeButton)

    const day1 = await waitFor(() => screen.getByAltText('Day1'))
    expect(day1).toBeInTheDocument()
  })
})

describe('App favoriting functionality', () => {
  it('Should allow users to favorite an image and view that image in the favorites page', async() => {
    getAllImages.mockResolvedValue(sampleWeek)
    jest.useFakeTimers()
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    jest.runAllTimers()

    const favoritesButton = await waitFor(() => screen.getByRole('link', {name: 'My Favorites'}))
    const favoriteButton = await waitFor(() => screen.getByText('Favorite'))
    fireEvent.click(favoriteButton)

    const unFavoriteButton = await waitFor(() => screen.getByText('UnFavorite'))
    expect(unFavoriteButton).toBeInTheDocument()

    fireEvent.click(favoritesButton)

    const image1 = await waitFor(() => screen.getByAltText('Day1 image'))
    expect(image1).toBeInTheDocument()
  })
})
