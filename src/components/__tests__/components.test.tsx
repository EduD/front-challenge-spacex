import { render, screen } from "@testing-library/react";
import { Loading, Layout, ErrorMessage } from "../";


describe("Test render", () => {

  it("should render loading component", () => {
    render(<Loading />);
    expect(screen.getByText("Loading characters ...")).toBeDefined();
  });

  it("should render Layout component", () => {
    render(<Layout children={undefined} />);
    expect(screen.getByText("Rick and Morty API")).toBeDefined();
  });

  it("should render Error message component", () => {
    render(<ErrorMessage error={""} />);
    expect(screen.getByText("It was an error:")).toBeDefined();
  });

});
