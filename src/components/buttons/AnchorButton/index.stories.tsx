import { ComponentMeta } from "@storybook/react";

import { AnchorButton } from ".";

const meta: ComponentMeta<typeof AnchorButton> = {
	title: "buttons/AnchorButton",
	component: AnchorButton,
	args: AnchorButton.defaultProps,
};

const Primary = {
	args: {
		children: "Anchor Button",
	},
};

export default meta;
export { Primary };
