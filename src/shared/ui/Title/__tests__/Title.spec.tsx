import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import Title from "../Title.tsx";

describe("Title", () => {
  it("renders the content", () => {
    const content = "Test Title!";
    const { container } = render(
      <Title content={content} dataTestId="title" />
    );

    const textContent =
      container.querySelector("[data-testid=title]")?.textContent || "";
    expect(textContent).toBe(content);
  });
});
