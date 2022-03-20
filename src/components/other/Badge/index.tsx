import { FC } from "react";

import classNames from "classnames";

import { WithClassName } from "types";

import styles from "./index.module.scss";

const Badge: FC<WithClassName> = ({ children, className }) => {
	return <div className={classNames(styles.badge, className)}>{children}</div>;
};

export { Badge };
