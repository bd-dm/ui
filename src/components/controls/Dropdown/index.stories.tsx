import { ComponentMeta, ComponentStory } from "@storybook/react";
import { loremIpsum } from "lorem-ipsum";
import { Font } from "components/typography";
import { VFC } from "react";
import { Dropdown } from ".";

const meta: ComponentMeta<typeof Dropdown> = {
	title: "controls/Dropdown",
	component: Dropdown,
	args: Dropdown.defaultProps,
};

const LoremIpsum: VFC = () => (
	<>
		<Font>{loremIpsum()}</Font>
		<br />
		<Font>{loremIpsum()}</Font>
	</>
);

const Template: ComponentStory<typeof Dropdown> = (props) => {
	return (
		<div>
			<LoremIpsum />

			<Dropdown {...props}>
				<Dropdown.Button />
				<Dropdown.List
					items={[{ children: "Item 1" }, { children: "Item 2" }]}
					position={Dropdown.ListPosition.LEFT}
				/>
			</Dropdown>

			<LoremIpsum />
		</div>
	);
};

const Primary = Template.bind({});
Primary.args = {};

export default meta;
export { Primary };
