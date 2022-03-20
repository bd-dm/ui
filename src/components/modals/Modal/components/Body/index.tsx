import { FC } from "react";

import classNames from "classnames";

import styles from "../../index.module.scss";

interface BodyProps {
	/** @default false */
	withoutPadding?: boolean;
}

const Body: FC<BodyProps> = ({ children, withoutPadding }) => {
	return (
		<section
			className={classNames(styles.body, {
				[styles.bodyWithPadding]: !withoutPadding,
			})}
		>
			{children}
		</section>
	);
};

Body.defaultProps = {
	withoutPadding: false,
};

export { Body };
