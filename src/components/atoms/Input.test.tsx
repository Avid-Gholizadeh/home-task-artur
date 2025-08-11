import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  it("renders input with placeholder", () => {
    render(<Input placeholder="Enter your email" name="email" />);
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
  });

  it("handles value changes", () => {
    const handleChange = vi.fn();
    render(<Input name="email" onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test@example.com" } });

    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "test@example.com" }),
      })
    );
  });

  it("renders input with different types", () => {
    const { rerender } = render(<Input type="text" name="text" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "text");

    rerender(<Input type="email" name="email" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");

    rerender(<Input type="password" name="password" />);
    expect(screen.getByDisplayValue("")).toHaveAttribute("type", "password");
  });

  it("renders disabled input", () => {
    render(<Input disabled name="disabled" />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("renders input with value", () => {
    render(<Input value="initial value" name="value" />);
    expect(screen.getByDisplayValue("initial value")).toBeInTheDocument();
  });

  it("renders input with maxLength", () => {
    render(<Input maxLength={10} name="maxLength" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("maxLength", "10");
  });

  it("renders input with autoComplete", () => {
    render(<Input autoComplete="email" name="email" />);
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "autoComplete",
      "email"
    );
  });

  it("handles focus and blur events", () => {
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();

    render(<Input onFocus={handleFocus} onBlur={handleBlur} name="events" />);
    const input = screen.getByRole("textbox");

    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it("forwards ref correctly", () => {
    const ref = vi.fn();
    render(<Input ref={ref} name="ref" />);
    expect(ref).toHaveBeenCalled();
  });
});
