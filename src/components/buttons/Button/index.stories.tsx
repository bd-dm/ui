import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

const meta: ComponentMeta<typeof Button> = {
	title: "buttons/Button",
	component: Button,
};

const Primary: ComponentStory<typeof Button> = () => <Button>Button</Button>;

export default meta;
export { Primary };
