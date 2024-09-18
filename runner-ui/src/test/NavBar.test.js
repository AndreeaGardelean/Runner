import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import NavBar from "../components/NavBar";

const createRouterWrapper = (history) => ({ children }) => (
  <Router location={history.location} navigator={history}>
    {children}
  </Router>
);

describe("<NavBar /> home", () => {
  it("redirect to home page", () => {
    // Arrange
    const history = createMemoryHistory();
    const Wrapper = createRouterWrapper(history);
    render(<NavBar />, { wrapper: Wrapper });

    // Act
    const homeButton = screen.getByAltText('Run Icon');
    fireEvent.click(homeButton);

    // Assert
    expect(history.location.pathname).toBe('/');
  })
});

describe("<NavBar /> calendar", () => {
  it("redirect to calendar page", () => {
    // Arrange
    const history = createMemoryHistory();
    const Wrapper = createRouterWrapper(history);
    render(<NavBar />, { wrapper: Wrapper });

    // Act
    const calendarButton = screen.getByAltText('Calendar Icon');
    fireEvent.click(calendarButton);

    // Assert
    expect(history.location.pathname).toBe('/calendar');
  })
});

describe("<NavBar /> races", () => {
  it("redirect to races page", () => {
    // Arrange 
    const history = createMemoryHistory();
    const Wrapper = createRouterWrapper(history);
    render(<NavBar />, { wrapper: Wrapper });

    // Act
    const racesButton = screen.getByAltText('Medal Icon');
    fireEvent.click(racesButton);

    // Assert
    expect(history.location.pathname).toBe('/races');
  })
});

