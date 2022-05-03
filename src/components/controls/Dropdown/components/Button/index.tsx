import { VFC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";

import { useDropdown } from "components/controls/Dropdown/context";
import classNames from "classnames";
import styles from "./index.module.scss";

const Button: VFC = () => {
	const { isActive, toggleIsActive } = useDropdown();

	return (
		<button
			type="button"
			className={classNames(styles.button, { [styles.active]: isActive })}
			onClick={toggleIsActive}
		>
			<FontAwesomeIcon icon={faEllipsisV} />
		</button>
	);
};

export { Button };
