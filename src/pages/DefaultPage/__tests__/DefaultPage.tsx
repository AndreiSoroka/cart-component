import { renderWithProviders } from "@/store.renderWithProviders";
import DefaultPage from "@/pages/DefaultPage/DefaultPage";

describe("DefaultPage", () => {
  it("Should render DefaultPage without crashing", () => {
    const { container } = renderWithProviders(<DefaultPage />);
    expect(container).toBeTruthy();
  });
});
