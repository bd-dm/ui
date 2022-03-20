import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SpinnerIcon } from ".";

const meta: ComponentMeta<typeof SpinnerIcon> = {
	title: "icons/SpinnerIcon",
	component: SpinnerIcon,
};

const Primary: ComponentStory<typeof SpinnerIcon> = () => <SpinnerIcon />;

export default meta;
export { Primary };
