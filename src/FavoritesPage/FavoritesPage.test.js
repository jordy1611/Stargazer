import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FavoritesPage from './FavoritesPage';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { sampleUserFavorites } from '../testData';

describe('FavoritesPage render', () => {
  it('should render user favorites if user has favorites', () => {
    render(
      <MemoryRouter>
        <FavoritesPage
          userFavorites={sampleUserFavorites}
        />
      </MemoryRouter>
    )

    const favsTitle = screen.getByText('My Favorites')
    const favsText = screen.getByText('Hover Over Image To See Info')
    const homeButton = screen.getByRole('link', { name: 'Home' })
    const day1Image = screen.getByAltText('Day1')
    const day2Image = screen.queryByAltText('Day2')
    const day3Image = screen.getByAltText('Day3')
    const day4Image = screen.queryByAltText('Day4')
    const day5Image = screen.queryByAltText('Day5')
    const day6Image = screen.queryByAltText('Day6')
    const day7Image = screen.getByAltText('Day7')

    expect(favsTitle).toBeInTheDocument()
    expect(favsText).toBeInTheDocument()
    expect(homeButton).toBeInTheDocument()
    expect(day1Image).toBeInTheDocument()
    expect(day2Image).not.toBeInTheDocument()
    expect(day3Image).toBeInTheDocument()
    expect(day4Image).not.toBeInTheDocument()
    expect(day5Image).not.toBeInTheDocument()
    expect(day6Image).not.toBeInTheDocument()
    expect(day7Image).toBeInTheDocument()
  })

  it('should render no user favorites if user does not have favorites', () => {
    render(
      <MemoryRouter>
        <FavoritesPage
          userFavorites={[]}
        />
      </MemoryRouter>
    )

    const favsTitle = screen.getByText('My Favorites')
    const favsText = screen.getByText('Hover Over Image To See Info')
    const homeButton = screen.getByRole('link', { name: 'Home' })
    const day1Image = screen.queryByAltText('Day1')
    const day2Image = screen.queryByAltText('Day2')
    const day3Image = screen.queryByAltText('Day3')
    const day4Image = screen.queryByAltText('Day4')
    const day5Image = screen.queryByAltText('Day5')
    const day6Image = screen.queryByAltText('Day6')
    const day7Image = screen.queryByAltText('Day7')

    expect(favsTitle).toBeInTheDocument()
    expect(favsText).toBeInTheDocument()
    expect(homeButton).toBeInTheDocument()
    expect(day1Image).not.toBeInTheDocument()
    expect(day2Image).not.toBeInTheDocument()
    expect(day3Image).not.toBeInTheDocument()
    expect(day4Image).not.toBeInTheDocument()
    expect(day5Image).not.toBeInTheDocument()
    expect(day6Image).not.toBeInTheDocument()
    expect(day7Image).not.toBeInTheDocument()
  })
})
