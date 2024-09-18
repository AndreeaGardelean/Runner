import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import StartBar from "../components/StartBar";

describe("<StartBar />", () => {
  it("the home page contains the start bar", () => {
    // Arrange
    render(<StartBar />);

    // Act
    const iconImage = screen.getByText('Start');

    // Assert
    expect(iconImage).toBeInTheDocument();
  })
});
