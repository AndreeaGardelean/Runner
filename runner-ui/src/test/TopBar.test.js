import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import TopBar from '../components/TopBar';

const createRouterWrapper = (history) => ({ children }) => (
  <Router location={history.location} navigator={history}>
    {children}
  </Router>
);

describe("<TopBar />", () => {
  it("contains icon and name", () => {
    // Arrange
    const history = createMemoryHistory();
    const Wrapper = createRouterWrapper(history);
    render(<TopBar />, { wrapper: Wrapper });

    // Act
    const logo = screen.getByAltText('Running Icon');
    const title = screen.getByText('Runner');

    // Assert
    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  })
});

describe("<TopBar /> login", () => {
  it("redirect to login form on click", () => {
    // Arrange
    const history = createMemoryHistory();
    const Wrapper = createRouterWrapper(history);
    render(<TopBar />, { wrapper: Wrapper });

    // Act
    const loginButton = screen.getByAltText('User Icon');
    fireEvent.click(loginButton);

    // Assert
    expect(history.location.pathname).toBe('/login');
  })
});

