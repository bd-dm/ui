import { FC } from "react";

import { WithClassName } from "types";

import { useUI } from "components/_general/UI";
import classNames from "classnames";
import styles from "./index.module.scss";

const Layout: FC<WithClassName> = ({ children, className }) => {
	const { theme } = useUI();

	return (
		<div className={`theme theme-${theme}`}>
			<div className={classNames(styles.app, className)}>{children}</div>
		</div>
	);
};

export { Layout };
