import { FC } from "react";
import { WithClassName } from "types";
import classNames from "classnames";
import styles from "./index.module.scss";

const Container: FC<WithClassName> = ({ children, className }) => {
	return (
		<div className={classNames(styles.container, className)}>{children}</div>
	);
};

export { Container };
