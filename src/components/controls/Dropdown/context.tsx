import { createContext, FC, useContext, useMemo, useState } from "react";
import noop from "lodash/noop";

interface DropdownContextType {
	isActive: boolean;
	toggleIsActive: () => void;
}

const dropdownContextDefaultValue: DropdownContextType = {
	isActive: false,
	toggleIsActive: noop,
};

const DropdownContext = createContext<DropdownContextType>(
	dropdownContextDefaultValue
);

const DropdownContextProvider: FC = ({ children }) => {
	const [isActive, setIsActive] = useState(
		dropdownContextDefaultValue.isActive
	);

	const toggleIsActive = () => setIsActive((prevState) => !prevState);

	const value = useMemo(
		() => ({ isActive, toggleIsActive }),
		[isActive, toggleIsActive]
	);

	return (
		<DropdownContext.Provider value={value}>
			{children}
		</DropdownContext.Provider>
	);
};

const useDropdown = (): DropdownContextType => {
	const { isActive, toggleIsActive } = useContext(DropdownContext);

	return { isActive, toggleIsActive };
};

export { DropdownContextProvider, useDropdown };
