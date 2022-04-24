/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
/// <reference types="cypress-image-snapshot" />

import { mount } from "@cypress/react";
import { Form } from "components";
import { Primary } from "components/forms/Form/index.stories";
import { UITheme } from "types";
import { ComponentProps } from "react";
import { renderWithTheme } from "../../utils";

const DEFAULT_PROPS: Partial<ComponentProps<typeof Form>> = {};

const render = (
	props?: Partial<ComponentProps<typeof Form>>,
	theme: UITheme = UITheme.LIGHT
) => {
	mount(
		renderWithTheme(
			<div data-testid="form">
				<Primary {...DEFAULT_PROPS} {...props} onSubmit={() => {}} />
			</div>,
			theme
		)
	);
};

const getForm = () => cy.findByTestId("form");

describe("Form", () => {
	it("Renders: light theme", () => {
		render();
		const form = getForm();

		form.matchImageSnapshot();
	});
	it("Renders: dark theme", () => {
		render({}, UITheme.DARK);
		const form = getForm();

		form.matchImageSnapshot();
	});
});
