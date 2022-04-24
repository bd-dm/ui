import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from ".";

const meta: ComponentMeta<typeof Button> = {
	title: "buttons/Button",
	component: Button,
	args: Button.defaultProps,
};

const Template: ComponentStory<typeof Button> = (props) => {
	return <Button {...props} />;
};

const Primary = Template.bind({});
Primary.args = {
	children: "Button",
};

export default meta;
export { Primary };
