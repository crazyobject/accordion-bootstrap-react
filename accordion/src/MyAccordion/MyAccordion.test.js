import { fireEvent, render, screen } from "@testing-library/react";
import MyAccordion from "./MyAccordion";

describe("Myaccordion test suit", () => {
  const items = [
    {
      header: "Header One",
      body: "contents of accordion",
    },
  ];

  test("accordion loaded successfully", () => {
    render(<MyAccordion width={"100%"} items={items} />);

    const accordion = screen.getByTestId("MyAccordion");

    expect(accordion).toBeInTheDocument();
  });

  test("accordion expand successfully", () => {
    render(<MyAccordion width={"100%"} items={items} />);

    const accordionHeader = screen.getByTestId("toggleButton");

    fireEvent.click(accordionHeader);

    expect(screen.getByText("contents of accordion")).toBeTruthy();
  });

  test("accordion collapse successfully", () => {
    render(<MyAccordion width={"100%"} items={items} />);

    const accordionHeader = screen.getByTestId("toggleButton");

    fireEvent.click(accordionHeader);

    fireEvent.click(accordionHeader);

    setTimeout(() => {
      expect(screen.queryByText("contents of accordion")).toBeFalsy();
    }, 1500);
  });
});
