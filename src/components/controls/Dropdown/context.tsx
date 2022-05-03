import { createContext, FC, useContext, useMemo, useState } from "react";
import noop from "lodash/noop";
import { nanoid } from "nanoid";

interface DropdownContextType {
	isActive: boolean;
	toggleIsActive: () => void;
	buttonId: string;
}

const dropdownContextDefaultValue: DropdownContextType = {
	isActive: false,
	toggleIsActive: noop,
	buttonId: "",
};

const DropdownContext = createContext<DropdownContextType>(
	dropdownContextDefaultValue
);

const DropdownContextProvider: FC = ({ children }) => {
	const [isActive, setIsActive] = useState(
		dropdownContextDefaultValue.isActive
	);

	const buttonId = useMemo(() => nanoid(), []);
	const toggleIsActive = () => setIsActive((prevState) => !prevState);

	const value = useMemo(
		() => ({ isActive, toggleIsActive, buttonId }),
		[isActive, toggleIsActive, buttonId]
	);

	return (
		<DropdownContext.Provider value={value}>
			{children}
		</DropdownContext.Provider>
	);
};

const useDropdown = (): DropdownContextType => {
	const { isActive, toggleIsActive, buttonId } = useContext(DropdownContext);

	return { isActive, toggleIsActive, buttonId };
};

export { DropdownContextProvider, useDropdown };
