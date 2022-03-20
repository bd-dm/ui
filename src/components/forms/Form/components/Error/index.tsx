import { VFC } from "react";

import isUndefined from "lodash/isUndefined";

import { Font } from "components/typography";

import styles from "../../index.module.scss";

interface ErrorProps {
	message?: string;
}

const Error: VFC<ErrorProps> = ({ message }) => {
	if (isUndefined(message)) {
		return null;
	}

	return <Font className={styles.error}>{message}</Font>;
};

export { Error };
