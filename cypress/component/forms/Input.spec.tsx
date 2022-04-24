/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="cypress-image-snapshot" />

import { mount } from "@cypress/react";
import { Input } from "components";
import { UITheme } from "types";
import { ComponentProps, useState, VFC } from "react";
import { renderWithTheme } from "../../utils";

const DEFAULT_PROPS: Partial<ComponentProps<typeof Input>> = {
	elementProps: { placeholder: "Placeholder" },
};

const render = (
	props?: Partial<ComponentProps<typeof Input>>,
	theme: UITheme = UITheme.LIGHT
) => {
	const TestComponent: VFC = () => {
		const [value, setValue] = useState("");

		return (
			<Input value={value} onChange={setValue} {...DEFAULT_PROPS} {...props} />
		);
	};

	mount(renderWithTheme(<TestComponent />, theme));
};

const getInput = () => cy.findByRole("textbox");

it("Renders: light theme", () => {
	render();
	const input = getInput();

	input.should("have.attr", "placeholder", "Placeholder");

	input.matchImageSnapshot();
});

it("Renders: dark theme", () => {
	render({}, UITheme.DARK);
	const input = getInput();

	input.should("have.attr", "placeholder", "Placeholder");

	input.matchImageSnapshot();
});

it("Focuses", () => {
	render();
	const input = getInput();

	input.realClick().then(() => {
		input.matchImageSnapshot();
	});
});

it("Types text", () => {
	render();
	const input = getInput();

	input.type("Text").blur().should("have.value", "Text");

	input.matchImageSnapshot();
});
