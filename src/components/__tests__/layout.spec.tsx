import { render } from "@testing-library/react";
import { Loading } from "../Loading";

describe("Test render", () => {

  // Install Jest extension in VSCode if you want run only one specific test
  it("test render", () => {
    render(<Loading />);
    expect(1).toBe(1);
  });
});
