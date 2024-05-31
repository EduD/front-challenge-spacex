import { render, screen } from "@testing-library/react";
import { Loading } from "../Loading";
import { Layout } from "../Layout";
import { CardCharacter } from "../CardCharacter";
import { ModalCharacter } from "../Modal";
import { ErrorMessage } from "../ErrorMessage";
import { CharacterInfo } from "../CharacterInfo";

// In this test, I use the Double A method (AA)
// 1A = Arranje enviroment
// 2A = Whether the test behaved as expected


describe("Test render", () => {
  // Install Jest extension in VSCode if you want run only one specific test



  it("should render loading component", () => {
    render(<Loading />);
    expect(screen.getByText("Loading characters ...")).toBeDefined();
  });

  it("should render Layout component", () => {
    render(<Layout />);
    expect(screen.getByText("Rick and Morty API")).toBeDefined();
  });

  it("should render Error message component", () => {
    render(<ErrorMessage />);
    expect(screen.getByText("It was an error:")).toBeDefined();
  });

  it("should render card character component", () => {
    render(<CharacterInfo />);
    expect(screen.getByTestId("dada")).toBeDefined();
  });
});
