import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import CounterDemo from "../../src/components/counter/CounterDemo.tsx";
import { describe, test, expect } from "vitest";

describe("Counter Component", () => {
  test("renders initial count", () => {
    render(<CounterDemo />);
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });
  test("increments count", async () => {
    const user = userEvent.setup();
    render(<CounterDemo />);
    await user.click(
      screen.getByRole("button", {
        name: /increment/i,
      }),
    );
    expect(screen.getByTestId("count")).toHaveTextContent("1");
  });
  test("decrements count", async () => {
    const user = userEvent.setup();
    render(<CounterDemo />);
    await user.click(
      screen.getByRole("button", {
        name: /decrement/i,
      }),
    );
    expect(screen.getByTestId("count")).toHaveTextContent("-1");
  });
  test("resets count", async () => {
    const user = userEvent.setup();
    render(<CounterDemo />);
    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    await user.click(incrementBtn);
    await user.click(incrementBtn);
    expect(screen.getByTestId("count")).toHaveTextContent("2");
    await user.click(
      screen.getByRole("button", {
        name: /reset/i,
      }),
    );
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });
});
