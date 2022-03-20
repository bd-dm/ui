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
	SPACE_BETWEEN = "space-between",
	FLEX_END = "flex-end",
}

interface RowProps extends WithClassName {
	verticalAlignment?: VerticalAlignment;
	horizontalAlignment?: HorizontalAlignment;
}

interface RowInterface extends FC<RowProps> {
	VerticalAlignment: typeof VerticalAlignment;
	HorizontalAlignment: typeof HorizontalAlignment;
}

const Row: RowInterface = ({
	children,
	className,
	verticalAlignment,
	horizontalAlignment,
}) => {
	return (
		<div
			className={classNames(styles.row, className, {
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

Row.HorizontalAlignment = HorizontalAlignment;
Row.VerticalAlignment = VerticalAlignment;

export { Row };
