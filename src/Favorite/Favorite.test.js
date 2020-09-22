import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Favorite from './Favorite';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { sampleDay } from '../testData';

describe('Favorite render', () => {
  it('Should render all appropriate content on component render', () => {
    render(
      <MemoryRouter>
        <Favorite
          favorite={sampleDay}
        />
      </MemoryRouter>
    )

    const favTitle = screen.getByText('Day1')
    const favDate = screen.getByText('2020-09-21')
    const favImage = screen.getByAltText('Day1')
    const favExplanation = screen.getByText('This is day1 of sampleWeek')
    const favHDUrl = screen.getByText('hdurl: https://apod.nasa.gov/apod/image/2009/OmegaSunSail_Sendra_8504.jpg')
    const favSDUrl = screen.getByText('sdurl: https://apod.nasa.gov/apod/image/2009/OmegaSunSail_Sendra_960.jpg')
    const favCopyright = screen.getByText('copyright: Juan Antonio Sendra')

    expect(favTitle).toBeInTheDocument()
    expect(favDate).toBeInTheDocument()
    expect(favImage).toBeInTheDocument()
    expect(favExplanation).toBeInTheDocument()
    expect(favHDUrl).toBeInTheDocument()
    expect(favSDUrl).toBeInTheDocument()
    expect(favCopyright).toBeInTheDocument()
  })

  it('Should render no content when not favorite image is available', () => {
    render(
      <MemoryRouter>
        <Favorite
          favorite={{}}
        />
      </MemoryRouter>
    )

    const favTitle = screen.queryByText('Day1')
    const favDate = screen.queryByText('2020-09-21')
    const favImage = screen.queryByAltText('Day1 image')
    const favExplanation = screen.queryByText('This is day1 of sampleWeek')
    const favHDUrl = screen.queryByText('hdurl: https://apod.nasa.gov/apod/image/2009/OmegaSunSail_Sendra_8504.jpg')
    const favSDUrl = screen.queryByText('sdurl: https://apod.nasa.gov/apod/image/2009/OmegaSunSail_Sendra_960.jpg')
    const favCopyright = screen.queryByText('copyright: Juan Antonio Sendra')

    expect(favTitle).not.toBeInTheDocument()
    expect(favDate).not.toBeInTheDocument()
    expect(favImage).not.toBeInTheDocument()
    expect(favExplanation).not.toBeInTheDocument()
    expect(favHDUrl).not.toBeInTheDocument()
    expect(favSDUrl).not.toBeInTheDocument()
    expect(favCopyright).not.toBeInTheDocument()
  })
})
