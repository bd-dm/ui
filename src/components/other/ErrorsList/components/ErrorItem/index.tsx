import { VFC } from "react";

import styles from "../../index.module.scss";
import { ErrorsListError } from "../../types";

interface ErrorItemProps {
	error: ErrorsListError;
}

const ErrorItem: VFC<ErrorItemProps> = ({ error: { message } }) => {
	return <div className={styles.error}>{message}</div>;
};

export { ErrorItem };
