import { createContext, FC, useContext } from "react";

import isUndefined from "lodash/isUndefined";

import { ComponentSwitchValueType } from "./types";

interface ComponentSwitchContextType {
	currentValue?: ComponentSwitchValueType;
}

const ComponentSwitchContext = createContext<ComponentSwitchContextType>({});

type ComponentSwitchContextTypeRequired = Required<ComponentSwitchContextType>;

interface ComponentSwitchContextProviderProps {
	value: ComponentSwitchContextType;
}

const ComponentSwitchContextProvider: FC<
	ComponentSwitchContextProviderProps
> = ({ children, value }) => {
	return (
		<ComponentSwitchContext.Provider value={value}>
			{children}
		</ComponentSwitchContext.Provider>
	);
};

const useComponentSwitch = (): ComponentSwitchContextTypeRequired => {
	const { currentValue } = useContext(ComponentSwitchContext);

	if (isUndefined(currentValue)) {
		throw new Error(
			"You can not use useComponentSwitch outside of ComponentSwitchContext.Provider"
		);
	}

	return { currentValue };
};

export { ComponentSwitchContextProvider, useComponentSwitch };
export type { ComponentSwitchContextType, ComponentSwitchContextTypeRequired };
