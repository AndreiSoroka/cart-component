// Reference https://redux.js.org/usage/writing-tests
import type { PropsWithChildren } from "react";
import React from "react";
import { act, render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { setupStore } from "@/store";
import type { AppStore, RootState } from "@/store";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function Wrapper({ children }: PropsWithChildren<{}>): React.ReactElement {
    let wrapperElement: React.ReactElement;
    act(() => {
      wrapperElement = <Provider store={store}>{children}</Provider>;
    });
    // unfortunately it is normal, act is sync https://github.com/threepointone/react-act-examples/blob/master/sync.md
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return wrapperElement;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
