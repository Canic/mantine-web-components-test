import { Button, MantineProvider, Box } from "@mantine/core";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";

class WebApp1 extends HTMLElement {
  connectedCallback() {
    const root = createRoot(this);
    root.render(
      <StrictMode>
        <MantineProvider>
          <Box bg="blue">
            <h1>Hallo von Mantine (WebApp-1)!</h1>
            <Button>Hello Mantine Button</Button>
          </Box>
        </MantineProvider>
      </StrictMode>
    );
  }
}

class WebApp2 extends HTMLElement {
  connectedCallback() {
    const root = createRoot(this);
    root.render(
      <StrictMode>
        <MantineProvider>
          <Box bg="pink">
            <h1>Hallo von WebApp-2!</h1>
            <Button>Hello Mantine Button</Button>
          </Box>
        </MantineProvider>
      </StrictMode>
    );
  }
}
export { WebApp1, WebApp2 };
