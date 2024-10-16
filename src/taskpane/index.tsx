import * as React from "react";
import { createRoot } from "react-dom/client";
// import { FluentProvider, webLightTheme } from "@fluentui/react-components";

/* global document, Office, HTMLElement */

const title = "Contoso Task Pane Add-in";

const rootElement: HTMLElement | null = document.getElementById("container");
const root = rootElement ? createRoot(rootElement) : undefined;

/* Render application after Office initializes */
Office.onReady(() => {
  root?.render(
    // <FluentProvider theme={webLightTheme}>
    <h2>{title}</h2>
    // </FluentProvider>
  );
});
