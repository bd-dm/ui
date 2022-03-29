import { FC } from "react";
import { WithClassName } from "types";
import styles from "./index.module.scss";
import classNames from "classnames";

const Container: FC<WithClassName> = ({ children, className }) => {
	return <div className={classNames(styles.container, className)}>{children}</div>;
};

export { Container };
