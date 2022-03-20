import { ComponentStory, ComponentMeta } from "@storybook/react";

import { useState } from "react";
import { Input } from ".";

const meta: ComponentMeta<typeof Input> = {
	title: "forms/Input",
	component: Input,
};

const Primary: ComponentStory<typeof Input> = () => {
	const [value, setValue] = useState("");

	return (
		<Input
			value={value}
			onChange={setValue}
			elementProps={{ placeholder: "Enter text..." }}
		/>
	);
};

export default meta;
export { Primary };
