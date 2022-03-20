import { FC } from "react";

import { Case } from "./components";
import {
	ComponentSwitchContextProvider,
	ComponentSwitchContextTypeRequired,
} from "./context";

interface ComponentSwitchInterface
	extends FC<ComponentSwitchContextTypeRequired> {
	Case: typeof Case;
}

const ComponentSwitch: ComponentSwitchInterface = ({
	children,
	currentValue,
}) => {
	return (
		<ComponentSwitchContextProvider value={{ currentValue }}>
			{children}
		</ComponentSwitchContextProvider>
	);
};

ComponentSwitch.Case = Case;

export { ComponentSwitch };
