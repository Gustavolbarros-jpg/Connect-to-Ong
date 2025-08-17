import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "../../Components/InputField";

describe("InputField Component", () => {
  test("renders input with label", () => {
    render(
      <InputField label="Email" htmlFor="email" id="email" name="email" />
    );
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  test("renders input with placeholder", () => {
    render(<InputField placeholder="Enter email" name="email" />);
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });

  test("calls onChange when input changes", () => {
    const handleChange = jest.fn();
    render(<InputField name="email" onChange={handleChange} />);

    const input = screen.getByDisplayValue("");
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(handleChange).toHaveBeenCalled();
  });

  test("renders input with type", () => {
    render(<InputField type="password" name="password" />);
    const input = screen.getByDisplayValue("");
    expect(input).toHaveAttribute("type", "password");
  });

  test("renders required input", () => {
    render(<InputField required name="email" />);
    const input = screen.getByDisplayValue("");
    expect(input).toBeRequired();
  });
});
