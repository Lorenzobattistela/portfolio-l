import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import React from "react";
import Footer from "./footer.js"

let container = null;
beforeEach(() => {
  // Configura um elemento do DOM como alvo do teste
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpar ao sair
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Testing Footer Component", () => {
    it("Renders with correct text", () => {
        act(() => {
            render(<Footer/>, container);
        });

        console.log(container);
        expect(container.textContent).toBe("Design inspired on this portfolio and Developed by Lorenzo BattistelaCopyright © 2022 SBDeveloper Vectors by Vecteezy");
    });
});