import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Font } from "components/typography";
import { Input } from "components/forms/Input";
import { useState } from "react";
import { Button } from "components/buttons";
import { Form } from ".";

const meta: ComponentMeta<typeof Form> = {
	title: "forms/Form",
	component: Form,
	args: Form.defaultProps,
};

const Template: ComponentStory<typeof Form> = (props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	return (
		<div style={{ width: "400px" }}>
			<Form {...props}>
				<Form.Column>
					<label>
						<Form.Row>
							<Font>Name</Font>
							<Input onChange={setName} value={name} />
						</Form.Row>
					</label>
					<label>
						<Form.Row>
							<Font>E-Mail</Font>
							<Input onChange={setEmail} value={email} />
						</Form.Row>
					</label>
					<Button type="submit">Submit</Button>
				</Form.Column>
			</Form>
		</div>
	);
};

const Primary = Template.bind({});
Primary.argTypes = { onSubmit: { action: "submitted" } };
Primary.args = {};

export default meta;
export { Primary };
