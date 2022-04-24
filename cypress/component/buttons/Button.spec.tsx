/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="cypress-image-snapshot" />

import { mount } from "@cypress/react";
import { Button } from "components";
import { UITheme } from "types";
import { ComponentProps } from "react";
import { renderWithTheme } from "../../utils";

const DEFAULT_PROPS = { children: "Button" };

const render = (
	props?: ComponentProps<typeof Button>,
	theme: UITheme = UITheme.LIGHT
) => {
	mount(renderWithTheme(<Button {...DEFAULT_PROPS} {...props} />, theme));
};

const getButton = () => cy.findByRole("button");

it("Renders: children", () => {
	render({ children: "Button" });
	const button = getButton();

	button.should("have.text", "Button");
	button.matchImageSnapshot();
});

it("Renders: light theme", () => {
	render({}, UITheme.LIGHT);
	const button = getButton();

	button.matchImageSnapshot();
});

it("Renders: dark theme", () => {
	render({}, UITheme.DARK);
	const button = getButton();

	button.matchImageSnapshot();
});

it("Fires callback on click", () => {
	const onClick = cy.stub();
	render({ onClick });
	const button = getButton();

	button.realClick().then(() => {
		expect(onClick).to.be.calledOnce;
	});
});
