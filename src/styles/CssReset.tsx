import { Global, css } from "@emotion/react";

export default function CssReset() {
  return (
    <Global
      styles={css`
        * {
          font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-synthesis: none;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-text-size-adjust: 100%;
        }
        html,
        body {
          height: 100%;
        }
        button {
          cursor: pointer;
        }
      `}
    />
  );
}
