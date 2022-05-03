import { FC } from "react";
import { DropdownContextProvider } from "components/controls/Dropdown/context";
import { DropdownListPosition } from "./constants";
import { List, Button } from "./components";
import styles from "./index.module.scss";

interface DropdownInterface extends FC {
	List: typeof List;
	ListPosition: typeof DropdownListPosition;
	Button: typeof Button;
}

const Dropdown: DropdownInterface = ({ children }) => {
	return (
		<DropdownContextProvider>
			<span className={styles.dropdown}>{children}</span>
		</DropdownContextProvider>
	);
};

Dropdown.List = List;
Dropdown.Button = Button;
Dropdown.ListPosition = DropdownListPosition;

export { Dropdown };
export type { DropdownInterface };
