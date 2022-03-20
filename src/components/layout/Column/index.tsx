import { FC } from "react";

import classNames from "classnames";
import isUndefined from "lodash/isUndefined";

import { WithClassName } from "types";

import styles from "./index.module.scss";

enum VerticalAlignment {
	FLEX_START = "flex-start",
	CENTER = "center",
	FLEX_END = "flex-end",
}

enum HorizontalAlignment {
	FLEX_START = "flex-start",
	CENTER = "center",
	FLEX_END = "flex-end",
}

interface ColumnProps extends WithClassName {
	verticalAlignment?: VerticalAlignment;
	horizontalAlignment?: HorizontalAlignment;
}

interface ColumnInterface extends FC<ColumnProps> {
	VerticalAlignment: typeof VerticalAlignment;
	HorizontalAlignment: typeof HorizontalAlignment;
}

const Column: ColumnInterface = ({
	children,
	className,
	verticalAlignment,
	horizontalAlignment,
}) => {
	return (
		<div
			className={classNames(styles.column, className, {
				[styles[`horizontal-alignment-${horizontalAlignment}`]]:
					!isUndefined(horizontalAlignment),
				[styles[`vertical-alignment-${verticalAlignment}`]]:
					!isUndefined(verticalAlignment),
			})}
		>
			{children}
		</div>
	);
};

Column.HorizontalAlignment = HorizontalAlignment;
Column.VerticalAlignment = VerticalAlignment;

export { Column };
