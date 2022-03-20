import { FC } from "react";

import classNames from "classnames";
import noop from "lodash/noop";

import styles from "../index.module.scss";

interface ItemProps {
	/** @default false */
	isChosen?: boolean;
	onClick?: () => void;
}

const Item: FC<ItemProps> = ({ children, onClick, isChosen }) => {
	return (
		<button
			className={classNames(styles.item, { [styles.chosen]: isChosen })}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

Item.defaultProps = {
	isChosen: false,
	onClick: noop,
};

export { Item };
