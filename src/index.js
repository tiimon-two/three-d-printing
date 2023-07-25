import { createRoot } from "react-dom/client";
import { product } from "./mock";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/defaultTheme";
import ProductPage from "./product-page/product-page";
import App from "./app/app";

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <ThemeProvider theme={theme}>
    {/* <ProductPage product={product} showInAccordeon /> */}
    <App />
  </ThemeProvider>
);
