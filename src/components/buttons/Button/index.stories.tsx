import { ComponentMeta } from "@storybook/react";

import { Button } from ".";

const meta: ComponentMeta<typeof Button> = {
	title: "buttons/Button",
	component: Button,
	args: Button.defaultProps,
};

const Primary = {
	args: {
		children: "Button",
	},
};

export default meta;
export { Primary };
