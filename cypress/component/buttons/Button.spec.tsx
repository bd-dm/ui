/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { mount } from "@cypress/react";
import { Button } from "components";
import { Primary } from "components/buttons/Button/index.stories";
import { UITheme } from "types";
import { ComponentProps } from "react";
import { renderWithTheme } from "../../utils";

const DEFAULT_PROPS: Partial<ComponentProps<typeof Button>> = {
	children: "Button",
};

const render = (
	props?: Partial<ComponentProps<typeof Button>>,
	theme: UITheme = UITheme.LIGHT
) => {
	mount(renderWithTheme(<Primary {...DEFAULT_PROPS} {...props} />, theme));
};

const getButton = () => cy.findByRole("button");

describe("Button", () => {
	it("Renders: children", () => {
		render({ children: "Button" });
		const button = getButton();

		button.should("have.text", "Button");

		// TODO: match snapshot
	});

	it("Renders: light theme", () => {
		render({}, UITheme.LIGHT);
		const button = getButton();

		// TODO: match snapshot
	});

	it("Renders: dark theme", () => {
		render({}, UITheme.DARK);
		const button = getButton();

		// TODO: match snapshot
	});

	it("Fires callback on click", () => {
		const onClick = cy.stub();
		render({ onClick });
		const button = getButton();

		button.realClick().then(() => {
			expect(onClick).to.be.calledOnce;
		});
	});
});
