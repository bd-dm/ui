import { AnchorHTMLAttributes, FC } from "react";

import classNames from "classnames";

import { WithClassName } from "types";

import styles from "./index.module.scss";

interface AnchorProps
	extends AnchorHTMLAttributes<HTMLAnchorElement>,
		WithClassName {}

const Anchor: FC<AnchorProps> = ({ className, children, ...props }) => {
	return (
		<a className={classNames(className, styles.anchor)} {...props}>
			{children}
		</a>
	);
};

export { Anchor };
