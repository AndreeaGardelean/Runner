import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Home from '../pages/Home';

describe("<Home />", () => {
  it("contains the start button", () => {
    // Arrange
    render(<Home />);

    // Act
    const startButton = screen.getByText('Start');

    // Assert
    expect(startButton).toBeInTheDocument();
  })
});
