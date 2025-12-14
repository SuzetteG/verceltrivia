import React from "react";
import { render, screen } from "@testing-library/react";
import CharactersPage from "../pages/CharactersPage"; // update the path if needed

describe("CharactersPage (negative test)", () => {
  it("fails on purpose so deploy is blocked", () => {
    render(<CharactersPage />);
    // This will FAIL because that exact text does not exist
    expect(
      screen.getByText("THIS TEXT DOES NOT EXIST ANYWHERE")
    ).toBeInTheDocument();
  });
});

