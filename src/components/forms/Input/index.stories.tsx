import { ComponentMeta, ComponentStory } from "@storybook/react";

import { useState } from "react";
import { Input } from ".";

const meta: ComponentMeta<typeof Input> = {
	title: "forms/Input",
	component: Input,
	args: Input.defaultProps,
	argTypes: {
		value: {
			control: {
				disable: true,
			},
		},
	},
};

const Template: ComponentStory<typeof Input> = (props) => {
	const [value, setValue] = useState("");

	return <Input {...props} value={value} onChange={setValue} />;
};

const Primary = Template.bind({});
Primary.args = {};

export default meta;
export { Primary };
