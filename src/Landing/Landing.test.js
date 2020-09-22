import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Landing from './Landing';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { sampleUserFavorites } from '../testData';

describe('Landing render', () => {
  it('Should render appropriate information when first visiting the page', () => {
    render(
      <MemoryRouter>
        <Landing/>
      </MemoryRouter>
    )

    const landingTitle = screen.getByText('STARGAZER')
    const landingImage = screen.getByAltText('Jupiter')
    const landingDescription = screen.getByText('Experience The Universe')

    expect(landingTitle).toBeInTheDocument()
    expect(landingImage).toBeInTheDocument()
    expect(landingDescription).toBeInTheDocument()
  })

  it('Should no longer text after 2 seconds', () => {
    jest.useFakeTimers()
    render(
      <MemoryRouter>
        <Landing/>
      </MemoryRouter>
    )
    jest.runAllTimers()

  const landingImage = screen.getByAltText('Jupiter')
    const landingTitle = screen.queryByText('STARGAZER')
    const landingDescription = screen.queryByText('Experience The Universe')

    expect(landingImage).toBeInTheDocument()
    expect(landingTitle).not.toBeInTheDocument()
    expect(landingDescription).not.toBeInTheDocument()
  })
})
