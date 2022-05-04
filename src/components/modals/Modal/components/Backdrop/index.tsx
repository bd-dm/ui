import { FC } from "react";

import { WithClassName } from "types";
import classNames from "classnames";
import styles from "../../index.module.scss";

interface BackdropProps extends WithClassName {}

const Backdrop: FC<BackdropProps> = ({ children, className }) => {
	return (
		<div className={classNames(styles.backdrop, className)}>{children}</div>
	);
};

export { Backdrop };
