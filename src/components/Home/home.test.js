import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import React from "react";
import Home from "./home.js"

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

describe("Testing Home Component", () => {
    it("Renders with correct text", () => {
        act(() => {
            render(<Home/>, container);
        });

        console.log(container.textContent);
        expect(container.textContent).toBe("Design inspired on this portfolio and Developed by Lorenzo BattistelaCopyright © 2022 SBDeveloper Vectors by Vecteezy");
    });
});