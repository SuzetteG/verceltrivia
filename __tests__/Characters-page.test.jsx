/* eslint-env jest */
import { render, screen } from "@testing-library/react";
import CharactersPage from "../pages/CharactersPage";

describe("CharactersPage (positive test)", () => {
  it("shows the successful deploy heading", () => {
    render(<CharactersPage />);
    // Now this text DOES exist, so the test will PASS
    expect(
      screen.getByText("Characters page, SUCCESSFUL deploy")
    ).toBeInTheDocument();
  });
});

