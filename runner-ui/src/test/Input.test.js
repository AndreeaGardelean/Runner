import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Input from "../components/Input";

// test input field type
describe("<Input inputType={'text'} />", () => {
  it("assigns the correct input field type", () => {
    // Arrange
    render(<Input inputType={'password'} inputPlaceholder={'Enter password'} />);

    // Act
    const field = screen.getByPlaceholderText('Enter password');

    // Assert
    expect(field).toBeInTheDocument();
    expect(field).toHaveAttribute('type', 'password');
  })
});

// test input field placeholder value
describe("<Input inputType={'email'} inputPlaceholder={'Enter email'} />", () => {
  it("assigns the correct placeholder", () => {
    // Arrange
    render(<Input inputType={'email'} inputPlaceholder={'Enter email'} />);

    // Act
    const field = screen.getByPlaceholderText('Enter email');

    // Assert
    expect(field).toBeInTheDocument();
    expect(field).toHaveAttribute('placeholder', 'Enter email');
  })
});


// test input field event handler on change trigger
describe("<Input inputType={'text'} inputPlaceholder={'Enter name'} handler={changeHandler} />", () => {
  it("triggers the event handler on change", () => {
    // Arrange
    const changeHandler = jest.fn();
    render(<Input inputType={'text'} inputPlaceholder={'Enter name'} handler={changeHandler} />);

    // Act
    const input = screen.getByPlaceholderText('Enter name');
    fireEvent.change(input, {target: { value : 'User Name'}});

    // Assert
    expect(input).toBeInTheDocument();
    expect(changeHandler).toHaveBeenCalled();
    expect(screen.getByDisplayValue('User Name')).toBeInTheDocument();
  })
});