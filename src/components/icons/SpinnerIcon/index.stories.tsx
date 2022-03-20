import { ComponentMeta } from "@storybook/react";

import { SpinnerIcon } from ".";

const meta: ComponentMeta<typeof SpinnerIcon> = {
	title: "icons/SpinnerIcon",
	component: SpinnerIcon,
	args: SpinnerIcon.defaultProps,
};

const Primary = {};

export default meta;
export { Primary };
