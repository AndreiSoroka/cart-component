import { renderWithProviders } from "@/shared/config/jest/renderWithProviders";
import DefaultPage from "@/pages/DefaultPage/DefaultPage";

describe("DefaultPage", () => {
  it("Should render DefaultPage without crashing", () => {
    const { container } = renderWithProviders(<DefaultPage />);
    expect(container).toBeTruthy();
  });
});
