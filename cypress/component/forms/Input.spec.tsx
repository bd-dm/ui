/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import { mount } from "@cypress/react";
import { Input } from "components";
import { Primary } from "components/forms/Input/index.stories";
import { UITheme } from "types";
import { ComponentProps } from "react";
import { renderWithTheme } from "../../utils";

const DEFAULT_PROPS: Partial<ComponentProps<typeof Input>> = {
	elementProps: { placeholder: "Placeholder" },
};

const render = (
	props?: Partial<ComponentProps<typeof Input>>,
	theme: UITheme = UITheme.LIGHT
) => {
	mount(
		renderWithTheme(
			<Primary {...DEFAULT_PROPS} {...props} value="" onChange={() => {}} />,
			theme
		)
	);
};

const getInput = () => cy.findByRole("textbox");

describe("Input", () => {
	it("Renders: light theme", () => {
		render();
		const input = getInput();

		input.should("have.attr", "placeholder", "Placeholder");

		// TODO: match snapshot
	});

	it("Renders: dark theme", () => {
		render({}, UITheme.DARK);
		const input = getInput();

		input.should("have.attr", "placeholder", "Placeholder");

		// TODO: match snapshot
	});

	it("Focuses", () => {
		render();
		const input = getInput();

		input.realClick().then(() => {
			// TODO: match snapshot
		});
	});

	it("Types text", () => {
		render();
		const input = getInput();

		input.type("Text").blur().should("have.value", "Text");

		// TODO: match snapshot
	});
});
