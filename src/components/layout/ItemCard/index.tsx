import { FC } from "react";

import classNames from "classnames";

import { WithClassName } from "types";

import styles from "./index.module.scss";

const ItemCard: FC<WithClassName> = ({ children, className }) => {
	return (
		<div className={classNames(styles.itemCard, className)}>{children}</div>
	);
};

export { ItemCard };
