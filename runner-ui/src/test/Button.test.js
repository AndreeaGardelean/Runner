import React from "react";
import lock from '../icons/lock.svg';
import { fireEvent, getByAltText, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Button from "../components/Button";

describe("<Button icon={lock} />", () => {
  it("displays the button custom-icon as expected", () => {
    // Arrange
    render(<Button icon={lock} />);

    // Act
    const iconImage = screen.getByAltText('Icon');

    // Assert
    expect(iconImage).toBeInTheDocument();
    expect(iconImage).toHaveAttribute('src', lock);
  })
});

describe("<Button icon={lock} active={'active'} clickHandler={clickHandler}", () => {
  it('enable event handlers when active prop is active', () => {
    // Arrange
    const clickHandler = jest.fn();
    render(<Button icon={lock} active={''} clickHandler={clickHandler} />);
    const button = screen.getByRole('button');

    // Act
    fireEvent.click(button);

    // Assert
    expect(clickHandler).toHaveBeenCalled();
  })
});