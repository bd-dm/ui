import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { Button } from "components/buttons";
import { loremIpsum } from "lorem-ipsum";
import { Modal } from ".";

const meta: ComponentMeta<typeof Modal> = {
	title: "modals/Modal",
	component: Modal,
	args: Modal.defaultProps,
};

const Template: ComponentStory<typeof Modal> = () => {
	const [isOpened, setIsOpened] = useState(false);

	return (
		<div>
			<Button onClick={() => setIsOpened(true)}>Open Modal</Button>
			<Modal isOpened={isOpened} closeHandler={() => setIsOpened(false)}>
				<Modal.Header>Header</Modal.Header>
				<Modal.Body>{loremIpsum({ count: 10 })}</Modal.Body>
			</Modal>
		</div>
	);
};

const Primary = Template.bind({});
Primary.args = {};

export default meta;
export { Primary };
