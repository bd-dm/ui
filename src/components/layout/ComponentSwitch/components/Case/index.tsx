import { FC } from "react";

import { useComponentSwitch } from "../../context";
import { ComponentSwitchValueType } from "../../types";

interface CaseProps {
	value: ComponentSwitchValueType;
}

const Case: FC<CaseProps> = ({ children, value }) => {
	const { currentValue } = useComponentSwitch();

	if (currentValue !== value) {
		return null;
	}

	return <>{children}</>;
};

export { Case };
