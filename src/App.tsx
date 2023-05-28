import { Checkout } from "./pages/checkout";
import CssReset from "./styles/CssReset";
import CustomTheme from "./styles/CustomTheme";

function App() {
  return (
    <>
      <CustomTheme>
        <Checkout />
      </CustomTheme>
      <CssReset />
    </>
  );
}

export default App;
