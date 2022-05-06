import { VFC } from "react";

import { useDropdown } from "components/controls/Dropdown/context";
import classNames from "classnames";
import styles from "./index.module.scss";

const Button: VFC = () => {
	const { isActive, toggleIsActive, buttonId } = useDropdown();

	return (
		<button
			type="button"
			id={buttonId}
			aria-haspopup="true"
			aria-expanded={isActive}
			className={classNames(styles.button, { [styles.active]: isActive })}
			onClick={toggleIsActive}
		>
			⋮
		</button>
	);
};

export { Button };
