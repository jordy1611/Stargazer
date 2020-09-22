import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ImagePage from './ImagePage';
import '@testing-library/jest-dom';
import { MemoryRouter, Router } from 'react-router-dom';
import { sampleWeek, sampleUserFavorites } from '../testData';

describe('ImagePage render', () => {

  it('Should render the correct content on page load', () => {
    render(
      <MemoryRouter>
        <ImagePage
        thisWeekImages={sampleWeek}
        today={'2020-09-21'}
        userFavorites={[]}
        favoriteImage={jest.fn()}
        unFavoriteImage={jest.fn()}
        />
      </MemoryRouter>
    )

    const date = screen.getByText('2020-09-21')
    const downArrow = screen.getByTestId('down-arrow')
    const infoText = screen.getByText('Info')
    const day1Image = screen.getByAltText('Day1')
    const favoriteToggle = screen.getByText('Favorite')
    const myFavoritesButton = screen.getByText('My Favorites')
    const hiddenTitle = screen.getByText('Day1')
    const hiddenExplanation = screen.getByText('This is day1 of sampleWeek')
    const hiddenCopyright = screen.getByText('Juan Antonio Sendra')

    expect(date).toBeInTheDocument()
    expect(downArrow).toBeInTheDocument()
    expect(infoText).toBeInTheDocument()
    expect(day1Image).toBeInTheDocument()
    expect(favoriteToggle).toBeInTheDocument()
    expect(hiddenTitle).toBeInTheDocument()
    expect(hiddenExplanation).toBeInTheDocument()
    expect(hiddenCopyright).toBeInTheDocument()
  })
})

describe('ImagePage navigation', () => {
  it('Should navigate to previous image on down arrow click', () => {
    render(
      <MemoryRouter>
        <ImagePage
        thisWeekImages={sampleWeek}
        today={'2020-09-21'}
        userFavorites={[]}
        favoriteImage={jest.fn()}
        unFavoriteImage={jest.fn()}
        />
      </MemoryRouter>
    )

    const downArrow = screen.getByTestId('down-arrow')

    fireEvent.click(downArrow)
    const upArrow = screen.getByTestId('up-arrow')
    const day2Image = screen.getByAltText('Day2')

    expect(upArrow).toBeInTheDocument()
    expect(day2Image).toBeInTheDocument()
  })

  it('Should navigate to next image on up arrow click', () => {
    render(
      <MemoryRouter>
        <ImagePage
        thisWeekImages={sampleWeek}
        today={'2020-09-21'}
        userFavorites={[]}
        favoriteImage={jest.fn()}
        unFavoriteImage={jest.fn()}
        />
      </MemoryRouter>
    )

    const downArrow = screen.getByTestId('down-arrow')

    fireEvent.click(downArrow)
    const upArrow = screen.getByTestId('up-arrow')
    const day1ImageQuery = screen.queryByAltText('Day1')

    expect(day1ImageQuery).not.toBeInTheDocument()

    fireEvent.click(upArrow)

    const day1Image = screen.queryByAltText('Day1')
    expect(day1Image).toBeInTheDocument()
  })
})

describe('ImagePage with user favorites', () => {
  it('Should display option to unfavorite when an image has been favorited', () => {
    render(
      <MemoryRouter>
        <ImagePage
        thisWeekImages={sampleWeek}
        today={'2020-09-21'}
        userFavorites={sampleUserFavorites}
        favoriteImage={jest.fn()}
        unFavoriteImage={jest.fn()}
        />
      </MemoryRouter>
    )

    const unFavoriteToggle = screen.getByText('UnFavorite')

    expect(unFavoriteToggle).toBeInTheDocument()
  })

  it('Should display unfavorite or favorite depending on if an image is in user favorites', () => {
    render(
      <MemoryRouter>
        <ImagePage
        thisWeekImages={sampleWeek}
        today={'2020-09-21'}
        userFavorites={sampleUserFavorites}
        favoriteImage={jest.fn()}
        unFavoriteImage={jest.fn()}
        />
      </MemoryRouter>
    )
    const downArrow = screen.getByTestId('down-arrow')
    const unFavoriteToggle1 = screen.getByText('UnFavorite')

    expect(unFavoriteToggle1).toBeInTheDocument()

    fireEvent.click(downArrow)

    const favoriteToggle1 = screen.getByText('Favorite')

    expect(favoriteToggle1).toBeInTheDocument()

    fireEvent.click(downArrow)

    const unFavoriteToggle2 = screen.getByText('UnFavorite')
    expect(unFavoriteToggle2).toBeInTheDocument()
  })
})
